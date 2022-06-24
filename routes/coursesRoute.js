const express = require('express');
const { createCoures, getCoures, getCouresById } = require('../routeController/courseControlls');
const router = express.Router();


router.route('/create-course').post(createCoures)
router.route('/all-courses').get(getCoures)
router.route('/course/:id').get(getCouresById)





module.exports =router;