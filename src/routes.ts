import { Router } from "express"
import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router()

/**
 * Tipos de parametros
 * Routes Params => Parametros de rotas
 * http://localhost:3333/1
 * Query Params => Filtros e buscas
 * http://localhost:3333/1?search=algumacoisa
 * Body Params => passa objetos dentro das requisições{
 * }
 */

routes.post("/settings", async (request, response) => {
    const { chat, username } = request.body

    const settingsRepository = getCustomRepository(SettingsRepository)

    const settings = settingsRepository.create({
        chat,
        username
    })

    await settingsRepository.save(settings)

    return response.json(settings);
})

export { routes }