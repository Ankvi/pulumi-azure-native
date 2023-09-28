export const Action = {
    Install: "Install",
    Launch: "Launch",
    Close: "Close",
    Uninstall: "Uninstall",
    Custom: "Custom",
} as const;

/**
 * The action of the command.
 */
export type Action = (typeof Action)[keyof typeof Action];

export const ContentType = {
    Inline: "Inline",
    File: "File",
    Path: "Path",
} as const;

/**
 * The type of command content.
 */
export type ContentType = (typeof ContentType)[keyof typeof ContentType];

export const TestType = {
    OutOfBoxTest: "OutOfBoxTest",
    FunctionalTest: "FunctionalTest",
} as const;

/**
 * The type of the test.
 */
export type TestType = (typeof TestType)[keyof typeof TestType];

export const Tier = {
    Standard: "Standard",
} as const;

/**
 * The tier of this particular SKU.
 */
export type Tier = (typeof Tier)[keyof typeof Tier];
