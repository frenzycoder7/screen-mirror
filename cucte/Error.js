class Errors {
        static async Error404(req, res, message) {
            res.status(404).send({
                msg: message == null ? 'Resource not found.' : message,
                errorCode: "404"
            })
        }
    
        static async InternalServerErrror(req, res, message) {
            res.status(500).send({
                msg: message == null ? "Internal server error" : message,
                errorCode: "500",
            })
        }
    
        static async Error403(req,res,message) {
            res.status(403).send({
                msg: message == null ? 'Requested resource is forbidden for some reason.' : message,
                errorCode:"403"
            })
        }
    }
    
    module.exports = {
        Errors
    }