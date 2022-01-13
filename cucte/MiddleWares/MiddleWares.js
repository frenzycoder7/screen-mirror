const checkRequiredFields = (fields) => {

        return (req, res, next) => {
    
            const errorFields = []
            const requiredFields = Object.keys(req.body)
    
            fields.forEach(f => {
                if (!requiredFields.includes(f)) {
                    errorFields.push(f);
                }
            })
    
            if (errorFields.length > 0) {
                return res.status(400).send(errorFields.join(', ')+"fields are required");
            }
            next()
    
        }
    }
    
    const checkRequiredHeaders = (headers) => {
        return (req, res, next) => {
            const errorFields = []
            const requiredFields = Object.keys(req.headers)
    
            headers.forEach(f => {
                if (!requiredFields.includes(f)) {
                    errorFields.push(f);
                }
            })
    
            if (errorFields.length > 0) {
                return res.status(400).send(errorFields.join(', ')+" fields are required in headers");
            }
            next()
    
    
        }
    }
    
    const checkRequiredQueries = (queries) => {
        return (req, res, next) => {
            const errorFields = []
            const requiredFields = Object.keys(req.query)
    
            queries.forEach(f => {
                if (!requiredFields.includes(f)) {
                    errorFields.push(f);
                }
            })
    
            if (errorFields.length > 0) {
                return res.status(400).send(errorFields.join(', ')+" fields are required in queries");
            }
            next()
        }
    
    }
    
    module.exports = { checkRequiredFields, checkRequiredHeaders, checkRequiredQueries }