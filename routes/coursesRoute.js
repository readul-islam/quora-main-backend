const express = require('express');
const { createCoures, getCoures, getCouresById } = require('../routeController/courseControlls');
const router = express.Router();


router.route('/course').post(createCoures).get(getCoures)

router.route('/course/:id').get(getCouresById)





module.exports =router;