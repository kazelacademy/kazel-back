const auth = require('express').Router();
const controller = require('../../controllers/api/AuthController');

/**
 * @openapi
 * /auth/signup:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Registrar un usuario en Kazel
 *     security:
 *      - bearerAuthJWT: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/signUpInput'
 *     responses:
 *       201:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *              $ref: '#/components/schemas/signUp201Output'
 *       400:
 *          description: Respuesta con errores
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/signUp400Output'
 */
auth.post('/signup', controller.signUp);

auth.get('/verify-account/:token', controller.verifyAccount);

module.exports = auth;
