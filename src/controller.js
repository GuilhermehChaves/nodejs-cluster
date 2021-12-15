class Controller {
    get(_request, response) {
        console.log(`Receiving request on PID ${process.pid}`);

        for(let i = 0; i < 5000000; i++) {}
        return response.status(200).json({ name: 'NodeJS', age: 12, test: 123 });
    }
}

module.exports = new Controller();
