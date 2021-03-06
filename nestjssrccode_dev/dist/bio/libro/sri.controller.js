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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const sri_service_1 = require("../rest/sri.service");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
let SriController = class SriController {
    constructor(restservice) {
        this.restservice = restservice;
        this._id = 0;
    }
    async findAll() {
        return this.restservice.findAll();
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SriController.prototype, "findAll", null);
SriController = __decorate([
    common_1.Controller('bio'),
    __metadata("design:paramtypes", [sri_service_1.SriService])
], SriController);
exports.SriController = SriController;
//# sourceMappingURL=sri.controller.js.map