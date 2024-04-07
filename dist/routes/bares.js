"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bares_1 = require("../controllers/bares");
const router = (0, express_1.Router)();
router.get('/', bares_1.getBares);
exports.default = router;
