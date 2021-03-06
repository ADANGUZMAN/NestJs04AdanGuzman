"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let ParametrosController = class ParametrosController {
    devolverParametros(request, response, queryParams, bodyParams, paramsParams) {
        const respuesta = {
            queryParams: queryParams,
            bodyParams: bodyParams,
            paramsParams: paramsParams,
            baseUrl: request.baseUrl,
            hostname: request.hostname,
            subdominios: request.subdominios,
            ip: request.ip,
            Metodo: request.method,
            originalUrl: request.originalUrl,
            path: request.path,
            protocolo: request.protocol
        };
        return response.send(respuesta);
    }
};
__decorate([
    common_1.Post('devolver/:id/:modelo'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __param(2, common_1.Query()),
    __param(3, common_1.Body()),
    __param(4, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], ParametrosController.prototype, "devolverParametros", null);
ParametrosController = __decorate([
    common_1.Controller('Parametros')
], ParametrosController);
exports.ParametrosController = ParametrosController;
//# sourceMappingURL=parametros.controller.js.map