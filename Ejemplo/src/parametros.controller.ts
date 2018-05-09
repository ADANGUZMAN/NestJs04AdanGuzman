import {Body, Controller, Param, Post, Query, Req, Res} from "@nestjs/common";

@Controller('Parametros')
export class ParametrosController {

    @Post('devolver/:id/:modelo')
    devolverParametros(
        @Req() request,
        @Res() response,
        @Query() queryParams,
        @Body() bodyParams,
        @Param() paramsParams
    ) {
        const respuesta = {
            queryParams: queryParams,
            bodyParams: bodyParams,
            paramsParams: paramsParams,
            baseUrl:request.baseUrl,
            hostname:request.hostname,
            subdominios:request.subdominios,
            ip:request.ip,
            Metodo:request.method,
            originalUrl:request.originalUrl,
            path:request.path,
            protocolo:request.protocol
        };
        return response.send(respuesta);
    }
    @Get('ReqRes')
    requestResponse(
        @Req() request,
        @Res() response
    )
}