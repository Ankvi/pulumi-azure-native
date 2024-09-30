export const DockerfileGenerationMode = {
    /**
     * Dockerfiles will be generated
     */
    Enabled: "enabled",
    /**
     * Dockerfiles will not be generated
     */
    Disabled: "disabled",
} as const;

/**
 * The mode of generation to be used for generating Dockerfiles.
 */
export type DockerfileGenerationMode = (typeof DockerfileGenerationMode)[keyof typeof DockerfileGenerationMode];

export const GenerationLanguage = {
    /**
     * clojure language
     */
    Clojure: "clojure",
    /**
     * csharp language
     */
    Csharp: "csharp",
    /**
     * erlang language
     */
    Erlang: "erlang",
    /**
     * go language
     */
    Go: "go",
    /**
     * gomodule language
     */
    Gomodule: "gomodule",
    /**
     * gradle language
     */
    Gradle: "gradle",
    /**
     * java language
     */
    Java: "java",
    /**
     * javascript language
     */
    Javascript: "javascript",
    /**
     * php language
     */
    Php: "php",
    /**
     * python language
     */
    Python: "python",
    /**
     * ruby language
     */
    Ruby: "ruby",
    /**
     * rust language
     */
    Rust: "rust",
    /**
     * swift language
     */
    Swift: "swift",
} as const;

/**
 * The programming language used.
 */
export type GenerationLanguage = (typeof GenerationLanguage)[keyof typeof GenerationLanguage];

export const GenerationManifestType = {
    /**
     * Helm manifests
     */
    Helm: "helm",
    /**
     * Kubernetes manifests
     */
    Kube: "kube",
} as const;

/**
 * Determines the type of manifests to be generated.
 */
export type GenerationManifestType = (typeof GenerationManifestType)[keyof typeof GenerationManifestType];

export const ManifestGenerationMode = {
    /**
     * Manifests will be generated
     */
    Enabled: "enabled",
    /**
     * Manifests will not be generated
     */
    Disabled: "disabled",
} as const;

/**
 * The mode of generation to be used for generating Manifest.
 */
export type ManifestGenerationMode = (typeof ManifestGenerationMode)[keyof typeof ManifestGenerationMode];

export const ManifestType = {
    /**
     * Repositories using helm
     */
    Helm: "helm",
    /**
     * Repositories using kubernetes manifests
     */
    Kube: "kube",
} as const;

/**
 * Determines the type of manifests within the repository.
 */
export type ManifestType = (typeof ManifestType)[keyof typeof ManifestType];

export const QuickStartTemplateType = {
    /**
     * The template has not use quick start template
     */
    None: "None",
    /**
     * The template use quick start template of HCI
     */
    HCI: "HCI",
    /**
     * The template use quick start template of HCI and AKS
     */
    HCIAKS: "HCIAKS",
    /**
     * The template use quick start template of HCI and ArcVM
     */
    HCIARCVM: "HCIARCVM",
    /**
     * The template use quick start template of All supported products
     */
    ALL: "ALL",
} as const;

/**
 * Determines the authorization status of requests.
 */
export type QuickStartTemplateType = (typeof QuickStartTemplateType)[keyof typeof QuickStartTemplateType];

export const WorkflowRunStatus = {
    /**
     * Workflow run is queued
     */
    Queued: "queued",
    /**
     * Workflow run is inprogress
     */
    Inprogress: "inprogress",
    /**
     * Workflow run is completed
     */
    Completed: "completed",
} as const;

/**
 * Describes the status of the workflow run
 */
export type WorkflowRunStatus = (typeof WorkflowRunStatus)[keyof typeof WorkflowRunStatus];
