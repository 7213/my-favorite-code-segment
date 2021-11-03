// from Typescript
import { CharacterCodes } from "./CharacterCodes";


export function isWhiteSpaceLike(ch: number): boolean {
    return isWhiteSpaceSingleLine(ch) || isLineBreak(ch);
}

export function isWhiteSpaceSingleLine(ch: number): boolean {
    return ch === CharacterCodes.space ||
        ch === CharacterCodes.tab ||
        ch === CharacterCodes.verticalTab ||
        ch === CharacterCodes.formFeed ||
        ch === CharacterCodes.nonBreakingSpace ||
        ch === CharacterCodes.nextLine ||
        ch === CharacterCodes.ogham ||
        ch >= CharacterCodes.enQuad && ch <= CharacterCodes.zeroWidthSpace ||
        ch === CharacterCodes.narrowNoBreakSpace ||
        ch === CharacterCodes.mathematicalSpace ||
        ch === CharacterCodes.ideographicSpace ||
        ch === CharacterCodes.byteOrderMark;
}

export function isLineBreak(ch: number): boolean {
    return ch === CharacterCodes.lineFeed ||
        ch === CharacterCodes.carriageReturn ||
        ch === CharacterCodes.lineSeparator ||
        ch === CharacterCodes.paragraphSeparator;
}

export const trimString = !!String.prototype.trim ? ((s: string) => s.trim()) : (s: string) => trimStringEnd(trimStringStart(s));

export const trimStringEnd = !!String.prototype.trimEnd ? ((s: string) => s.trimEnd()) : trimEndImpl;

export const trimStringStart = !!String.prototype.trimStart ? ((s: string) => s.trimStart()) : (s: string) => s.replace(/^\s+/g, "");


function trimEndImpl(s: string) {
    let end = s.length - 1;
    while(end >= 0) {
        if (!isWhiteSpaceLike(s.charCodeAt(end))) break;
        end--;
    }
    return s.slice(0, end + 1);
}
