import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.file.Files;
import java.nio.file.Paths;

public class Server {

    public static void main(String[] args) throws IOException {
        // Creating new server on port 3000
        HttpServer server = HttpServer.create(new InetSocketAddress(3000), 0);

        // adding new context, it is a path road for access the site
        server.createContext("/", new StaticFileHandler());
        server.createContext("/api/message", new ApiHandler());

        // runner
        server.setExecutor(null); // creates a default executor
        server.start();
        System.out.println("Server is running on http://localhost:3000");
    }

    static class StaticFileHandler implements HttpHandler {

        @Override
        public void handle(HttpExchange exchange) throws IOException {
            // looking for path
            String filePath = "dist" + exchange.getRequestURI().getPath();
            // taking the file using path
            File file = new File(filePath);

            // if file exist and it is not folder
            if (file.exists() && !file.isDirectory()) {
                // reading all bytes for send then to client
                byte[] bytes = Files.readAllBytes(Paths.get(filePath));
                // taking the type of file
                String contentType = getContentType(filePath);

                // add file type header
                // client need to know what type of bytes there are
                exchange.getResponseHeaders().set("Content-Type", contentType);
                // and length of bytes for proper init
                exchange.sendResponseHeaders(200, bytes.length);

                // creating the bridge between client and server
                // browser and java app
                OutputStream os = exchange.getResponseBody();
                // sending bytes
                os.write(bytes);
                // close the bridge
                os.close();
            } else {
                exchange.sendResponseHeaders(404, -1);
            }
        }

        // creating the header info for client about file type
        private String getContentType(String filePath) {
            if (filePath.endsWith(".html")) {
                return "text/html";
            } else if (filePath.endsWith(".css")) {
                return "text/css";
            } else if (filePath.endsWith(".js")) {
                return "application/javascript";
            } else {
                return "application/octet-stream";
            }
        }
    }

    //
    static class ApiHandler implements HttpHandler {

        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if ("GET".equals(exchange.getRequestMethod())) {
                // creating response as json format
                String response = "{\"message\": \"Hello, world!\"}";
                // setitng json header info
                exchange
                    .getResponseHeaders()
                    .set("Content-Type", "application/json");
                // length
                exchange.sendResponseHeaders(200, response.getBytes().length);

                // creating the bridge between
                OutputStream os = exchange.getResponseBody();
                // write
                os.write(response.getBytes());
                // close bridge
                os.close();
            } else {
                exchange.sendResponseHeaders(405, -1); // Method Not Allowed
            }
        }
    }
}
