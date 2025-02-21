// /api/user POST

//Salts, pour la sécurité, il est évident qu'il ne vaut mieux pas envoyer le mot de passe, de façon claire à la DB. C'est pourquoi on va utiliser la technique du 'salt'.

import prisma from "~/lib/prisma";


export default defineEventHandler(async(event) => {
    const body = await readBody(event)
    await prisma.user.create({
        data: {
            email: body.email,
            password: body.password,
        },
    })
    return console.log('success')
})