//Global Error handling

const errorHandling = function(req, res) {
    res.status(500).send({ message: "Internal Server Error" });
};

module.exports = errorHandling;