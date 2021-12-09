import { ParsingComponents, ParsingResult } from "./results";
import { Component, ParsedResult, ParsingOption } from "./index";
import { AsyncDebugBlock, DebugHandler } from "./debugging";
export interface Configuration {
    parsers: Parser[];
    refiners: Refiner[];
}
export interface Parser {
    pattern(context: ParsingContext): RegExp;
    extract(context: ParsingContext, match: RegExpMatchArray): ParsingComponents | ParsingResult | {
        [c in Component]?: number;
    } | null;
}
export interface Refiner {
    refine: (context: ParsingContext, results: ParsingResult[]) => ParsingResult[];
}
export declare class Chrono {
    parsers: Array<Parser>;
    refiners: Array<Refiner>;
    constructor(configuration?: Configuration);
    clone(): Chrono;
    parseDate(text: string, referenceDate?: Date, option?: ParsingOption): Date | null;
    parse(text: string, referenceDate?: Date, option?: ParsingOption): ParsedResult[];
    private static executeParser;
}
export declare class ParsingContext implements DebugHandler {
    readonly text: string;
    readonly refDate: Date;
    readonly option: ParsingOption;
    constructor(text: string, refDate: Date, option: ParsingOption);
    createParsingComponents(components?: {
        [c in Component]?: number;
    } | ParsingComponents): ParsingComponents;
    createParsingResult(index: number, textOrEndIndex: number | string, startComponents?: {
        [c in Component]?: number;
    } | ParsingComponents, endComponents?: {
        [c in Component]?: number;
    } | ParsingComponents): ParsingResult;
    debug(block: AsyncDebugBlock): void;
}
