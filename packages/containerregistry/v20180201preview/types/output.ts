import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Properties that describe a base image dependency.
     */
    export interface BaseImageDependencyResponse {
        /**
         * The sha256-based digest of the image manifest.
         */
        digest?: string;
        /**
         * The registry login server.
         */
        registry?: string;
        /**
         * The repository name.
         */
        repository?: string;
        /**
         * The tag name.
         */
        tag?: string;
        /**
         * The type of the base image dependency.
         */
        type?: string;
    }

    /**
     * Properties of a build argument.
     */
    export interface BuildArgumentResponse {
        /**
         * Flag to indicate whether the argument represents a secret and want to be removed from build logs.
         */
        isSecret?: boolean;
        /**
         * The name of the argument.
         */
        name: string;
        /**
         * The type of the argument.
         */
        type: string;
        /**
         * The value of the argument.
         */
        value: string;
    }
    /**
     * buildArgumentResponseProvideDefaults sets the appropriate defaults for BuildArgumentResponse
     */
    export function buildArgumentResponseProvideDefaults(val: BuildArgumentResponse): BuildArgumentResponse {
        return {
            ...val,
            isSecret: (val.isSecret) ?? false,
        };
    }

    /**
     * The Docker build step.
     */
    export interface DockerBuildStepResponse {
        /**
         * List of base image dependencies for a step.
         */
        baseImageDependencies: BaseImageDependencyResponse[];
        /**
         * The type of the auto trigger for base image dependency updates.
         */
        baseImageTrigger?: string;
        /**
         * The repository branch name.
         */
        branch?: string;
        /**
         * The custom arguments for building this build step.
         */
        buildArguments?: BuildArgumentResponse[];
        /**
         * The relative context path for a docker build in the source.
         */
        contextPath?: string;
        /**
         * The Docker file path relative to the source control root.
         */
        dockerFilePath?: string;
        /**
         * The fully qualified image names including the repository and tag.
         */
        imageNames?: string[];
        /**
         * The value of this property indicates whether the image built should be pushed to the registry or not.
         */
        isPushEnabled?: boolean;
        /**
         * The value of this property indicates whether the image cache is enabled or not.
         */
        noCache?: boolean;
        /**
         * The provisioning state of the build step.
         */
        provisioningState: string;
        /**
         * The type of the step.
         * Expected value is 'Docker'.
         */
        type: "Docker";
    }
    /**
     * dockerBuildStepResponseProvideDefaults sets the appropriate defaults for DockerBuildStepResponse
     */
    export function dockerBuildStepResponseProvideDefaults(val: DockerBuildStepResponse): DockerBuildStepResponse {
        return {
            ...val,
            isPushEnabled: (val.isPushEnabled) ?? true,
            noCache: (val.noCache) ?? false,
        };
    }

    /**
     * The platform properties against which the build has to happen.
     */
    export interface PlatformPropertiesResponse {
        /**
         * The CPU configuration in terms of number of cores required for the build.
         */
        cpu?: number;
        /**
         * The operating system type required for the build.
         */
        osType: string;
    }

    /**
     * The authorization properties for accessing the source code repository.
     */
    export interface SourceControlAuthInfoResponse {
        /**
         * Time in seconds that the token remains valid
         */
        expiresIn?: number;
        /**
         * The refresh token used to refresh the access token.
         */
        refreshToken?: string;
        /**
         * The scope of the access token.
         */
        scope?: string;
        /**
         * The access token used to access the source control provider.
         */
        token: string;
        /**
         * The type of Auth token.
         */
        tokenType?: string;
    }

    /**
     * The properties of the source code repository.
     */
    export interface SourceRepositoryPropertiesResponse {
        /**
         * The value of this property indicates whether the source control commit trigger is enabled or not.
         */
        isCommitTriggerEnabled?: boolean;
        /**
         * The full URL to the source code repository
         */
        repositoryUrl: string;
        /**
         * The authorization properties for accessing the source code repository.
         */
        sourceControlAuthProperties?: SourceControlAuthInfoResponse;
        /**
         * The type of source control service.
         */
        sourceControlType: string;
    }
    /**
     * sourceRepositoryPropertiesResponseProvideDefaults sets the appropriate defaults for SourceRepositoryPropertiesResponse
     */
    export function sourceRepositoryPropertiesResponseProvideDefaults(val: SourceRepositoryPropertiesResponse): SourceRepositoryPropertiesResponse {
        return {
            ...val,
            isCommitTriggerEnabled: (val.isCommitTriggerEnabled) ?? false,
        };
    }