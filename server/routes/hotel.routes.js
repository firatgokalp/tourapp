const { Router } = require('express')

const router = Router()
const hotels = require('../controllers/hotel.controller.js');

/**
 * @swagger
 * /hotels:
 *   post:
 *     tags:
 *       - "hotel"
 *     summary: Create hotel
 *     description: Create an hotel
 *     parameters:
 *     - name: "body"
 *       in: "body"
 *       description: "ID of hotel to return"
 *       required: true
 *       schema:
 *           $ref: "#/definitions/Hotel"
 *     responses:
 *       "200":
 *         description: "successful operation"
 *         schema:
 *           $ref: "#/definitions/Hotel"
*/
router.post('/hotels', hotels.create);
/**
 * @swagger
 * /hotels:
 *   get:
 *     tags:
 *       - "hotel"
 *     summary: Listing hotels
 *     description: Retrieve a list of hotels
 *     responses:
 *       "200":
 *         description: "successful operation"
 *         schema:
 *           $ref: "#/definitions/Hotel"
*/
router.get('/hotels', hotels.list);
/**
 * @swagger
 * /hotels/{hotelId}:
 *   get:
 *     tags:
 *       - "hotel"
 *     summary: Get a hotel
 *     description: Get hotel by id.
 *     parameters:
 *     - name: "hotelId"
 *       in: "path"
 *       description: "ID of hotel to return"
 *       required: true
 *       type: "integer"
 *       format: "int64"
 *     responses:
 *       "200":
 *         description: "successful operation"
 *         schema:
 *           $ref: "#/definitions/Hotel"
*/
router.get('/hotels/:hotelId', hotels.detail);
/**
 * @swagger
 * /hotels/{hotelId}:
 *   put:
 *     tags:
 *       - "hotel"
 *     summary: Update an hotel
 *     description: Update hotel
 *     parameters:
 *     - name: "body"
 *       in: "body"
 *       description: "ID of hotel to return"
 *       required: true
 *       schema:
 *           $ref: "#/definitions/Hotel"
 *     responses:
 *       "200":
 *         description: "successful operation"
 *         schema:
 *           $ref: "#/definitions/Hotel"
*/
router.put('/hotels/:hotelId', hotels.update);
/**
 * @swagger
 * /hotels/{hotelId}:
 *  delete:
 *    tags:
 *       - "hotel"
 *    summary: Delete an hotel
 *    description: Delete hotel by id
 */
router.delete('/hotels/:hotelId', hotels.delete);

module.exports = router

