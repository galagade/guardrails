const {
    Report,
} = require('../models')
const { validationResult } = require('express-validator/check');
module.exports = {
    async index(req, res) {
    	try{
	        let reports = await Report.findAll()
	        res.status(201).send({ 'success': true,'data':reports })
	    }catch(err){
	      	res.status(400).send({ 'success': false, 'msg':"something went wrong"})
	    }
    },
     async post(req, res) {
     	const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return  res.status(400).send({ 'success': false, errors: errors.mapped() });
        }
    	try{
    		const {body} = req
	        let report = await Report.create(body)
	        res.status(201).send({ 'success': true,'data':report })
	    }catch(err){
	      	res.status(400).send({ 'success': false, 'msg':"something went wrong"})
	    }
    },
    async get(req, res) {
    	try{
    		const { params } = req
	        let report = await Report.findOne({where:{id:params.id}})
	        if(!report){
	        	return res.status(400).send({
                        'success': false, 'msg':'Invalid security scan result id supplied'
                    });
	        }
	        res.status(201).send({ 'success': true,'data':report })
	    }catch(err){

	      	res.status(400).send({ 'success': false, 'msg':"something went wrong"})
	    }
    },
};
