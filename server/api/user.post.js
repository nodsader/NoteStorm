// /api/user POST

//Salts, pour la sécurité, il est évident qu'il ne vaut mieux pas envoyer le mot de passe, de façon claire à la DB. C'est pourquoi on va utiliser la technique du 'salt'.

import prisma from "~/lib/prisma";
import bcrypt from 'bcryptjs';

export default defineEventHandler(async(event) => {
    try {
        const body = await readBody(event)

        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(body.password, salt)

        //Sends to database
        await prisma.user.create({
            data: {
                email: body.email,
                password: passwordHash,
                salt: salt,
            },
        })
        return console.log('success')
    } catch(error) {

        if(error.code === 'P2002') {
            throw createError({
                statusCode: 409,
                message: 'An email with this adresse already exist.'
            })
        }

        throw error
    }
})