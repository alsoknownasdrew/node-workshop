import http from 'http';
import crypto from 'crypto';

const db = {
    tasks: [
        {
            id: crypto.randomUUID(),
            title: 'learn node',
            completed: false
        },
        {
            id: crypto.randomUUID(),
            title: 'do the dishes',
            completed: true
        },
    ]
};

const server = http.createServer((request, response) => {
    const path = request.url.toLocaleLowerCase();
    
    switch(path) {
        case '/api/v1/tasks':
            const body = {
                tasks: db.tasks
            };
            response.writeHead(200, 'OK', {'Content-type': 'application/json'});
            response.end(JSON.stringify(body));
            break;
        default:
            response.writeHead(404);
            response.end();
    }
});

server.listen(3000, () => console.log("it's working!"));
