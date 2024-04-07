"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asociaciones_1 = require("../controllers/asociaciones");
const router = (0, express_1.Router)();
router.get('/', asociaciones_1.getAsociaciones);
exports.default = router;
