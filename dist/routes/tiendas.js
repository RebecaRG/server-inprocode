"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tiendas_1 = require("../controllers/tiendas");
const router = (0, express_1.Router)();
router.get('/', tiendas_1.getTiendas);
exports.default = router;
