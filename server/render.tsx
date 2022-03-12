import { Request, Response } from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import HTML from "../src/Html";

export default function render(req: Request, res: Response) {
    res.write("<!DOCTYPE html>");
    ReactDOMServer.renderToNodeStream(<HTML />).pipe(res);
}
