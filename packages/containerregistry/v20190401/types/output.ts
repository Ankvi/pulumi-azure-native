import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The properties that determine the run agent configuration.
     */
    export interface AgentPropertiesResponse {
        /**
         * The CPU configuration in terms of number of cores required for the run.
         */
        cpu?: number;
    }

    /**
     * The properties of a run argument.
     */
    export interface ArgumentResponse {
        /**
         * Flag to indicate whether the argument represents a secret and want to be removed from build logs.
         */
        isSecret?: boolean;
        /**
         * The name of the argument.
         */
        name: string;
        /**
         * The value of the argument.
         */
        value: string;
    }
    /**
     * argumentResponseProvideDefaults sets the appropriate defaults for ArgumentResponse
     */
    export function argumentResponseProvideDefaults(val: ArgumentResponse): ArgumentResponse {
        return {
            ...val,
            isSecret: (val.isSecret) ?? false,
        };
    }

    /**
     * The authorization properties for accessing the source code repository.
     */
    export interface AuthInfoResponse {
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
        tokenType: string;
    }

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
     * The trigger based on base image dependency.
     */
    export interface BaseImageTriggerResponse {
        /**
         * The type of the auto trigger for base image dependency updates.
         */
        baseImageTriggerType: string;
        /**
         * The name of the trigger.
         */
        name: string;
        /**
         * The current status of trigger.
         */
        status?: string;
    }
    /**
     * baseImageTriggerResponseProvideDefaults sets the appropriate defaults for BaseImageTriggerResponse
     */
    export function baseImageTriggerResponseProvideDefaults(val: BaseImageTriggerResponse): BaseImageTriggerResponse {
        return {
            ...val,
            status: (val.status) ?? "Enabled",
        };
    }

    /**
     * The parameters that describes a set of credentials that will be used when a run is invoked.
     */
    export interface CredentialsResponse {
        /**
         * Describes the credential parameters for accessing other custom registries. The key
         * for the dictionary item will be the registry login server (myregistry.azurecr.io) and
         * the value of the item will be the registry credentials for accessing the registry.
         */
        customRegistries?: {[key: string]: CustomRegistryCredentialsResponse};
        /**
         * Describes the credential parameters for accessing the source registry.
         */
        sourceRegistry?: SourceRegistryCredentialsResponse;
    }

    /**
     * Describes the credentials that will be used to access a custom registry during a run.
     */
    export interface CustomRegistryCredentialsResponse {
        /**
         * Indicates the managed identity assigned to the custom credential. If a user-assigned identity
         * this value is the Client ID. If a system-assigned identity, the value will be `system`. In
         * the case of a system-assigned identity, the Client ID will be determined by the runner. This
         * identity may be used to authenticate to key vault to retrieve credentials or it may be the only 
         * source of authentication used for accessing the registry.
         */
        identity?: string;
        /**
         * The password for logging into the custom registry. The password is a secret 
         * object that allows multiple ways of providing the value for it.
         */
        password?: SecretObjectResponse;
        /**
         * The username for logging into the custom registry.
         */
        userName?: SecretObjectResponse;
    }

    /**
     * The Docker build step.
     */
    export interface DockerBuildStepResponse {
        /**
         * The collection of override arguments to be used when executing this build step.
         */
        arguments?: ArgumentResponse[];
        /**
         * List of base image dependencies for a step.
         */
        baseImageDependencies: BaseImageDependencyResponse[];
        /**
         * The token (git PAT or SAS token of storage account blob) associated with the context for a step.
         */
        contextAccessToken?: string;
        /**
         * The URL(absolute or relative) of the source context for the task step.
         */
        contextPath?: string;
        /**
         * The Docker file path relative to the source context.
         */
        dockerFilePath: string;
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
         * The name of the target build stage for the docker build.
         */
        target?: string;
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
     * The properties of a encoded task step.
     */
    export interface EncodedTaskStepResponse {
        /**
         * List of base image dependencies for a step.
         */
        baseImageDependencies: BaseImageDependencyResponse[];
        /**
         * The token (git PAT or SAS token of storage account blob) associated with the context for a step.
         */
        contextAccessToken?: string;
        /**
         * The URL(absolute or relative) of the source context for the task step.
         */
        contextPath?: string;
        /**
         * Base64 encoded value of the template/definition file content.
         */
        encodedTaskContent: string;
        /**
         * Base64 encoded value of the parameters/values file content.
         */
        encodedValuesContent?: string;
        /**
         * The type of the step.
         * Expected value is 'EncodedTask'.
         */
        type: "EncodedTask";
        /**
         * The collection of overridable values that can be passed when running a task.
         */
        values?: SetValueResponse[];
    }

    /**
     * The properties of a task step.
     */
    export interface FileTaskStepResponse {
        /**
         * List of base image dependencies for a step.
         */
        baseImageDependencies: BaseImageDependencyResponse[];
        /**
         * The token (git PAT or SAS token of storage account blob) associated with the context for a step.
         */
        contextAccessToken?: string;
        /**
         * The URL(absolute or relative) of the source context for the task step.
         */
        contextPath?: string;
        /**
         * The task template/definition file path relative to the source context.
         */
        taskFilePath: string;
        /**
         * The type of the step.
         * Expected value is 'FileTask'.
         */
        type: "FileTask";
        /**
         * The collection of overridable values that can be passed when running a task.
         */
        values?: SetValueResponse[];
        /**
         * The task values/parameters file path relative to the source context.
         */
        valuesFilePath?: string;
    }

    /**
     * Managed identity for the resource.
     */
    export interface IdentityPropertiesResponse {
        /**
         * The principal ID of resource identity.
         */
        principalId?: string;
        /**
         * The tenant ID of resource.
         */
        tenantId?: string;
        /**
         * The identity type.
         */
        type?: string;
        /**
         * The list of user identities associated with the resource. The user identity 
         * dictionary key references will be ARM resource ids in the form: 
         * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
         *     providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: {[key: string]: UserIdentityPropertiesResponse};
    }

    /**
     * The platform properties against which the run has to happen.
     */
    export interface PlatformPropertiesResponse {
        /**
         * The OS architecture.
         */
        architecture?: string;
        /**
         * The operating system type required for the run.
         */
        os: string;
        /**
         * Variant of the CPU.
         */
        variant?: string;
    }

    /**
     * Describes the properties of a secret object value.
     */
    export interface SecretObjectResponse {
        /**
         * The type of the secret object which determines how the value of the secret object has to be
         * interpreted.
         */
        type?: string;
        /**
         * The value of the secret. The format of this value will be determined
         * based on the type of the secret object. If the type is Opaque, the value will be
         * used as is without any modification.
         */
        value?: string;
    }

    /**
     * The properties of a overridable value that can be passed to a task template.
     */
    export interface SetValueResponse {
        /**
         * Flag to indicate whether the value represents a secret or not.
         */
        isSecret?: boolean;
        /**
         * The name of the overridable value.
         */
        name: string;
        /**
         * The overridable value.
         */
        value: string;
    }
    /**
     * setValueResponseProvideDefaults sets the appropriate defaults for SetValueResponse
     */
    export function setValueResponseProvideDefaults(val: SetValueResponse): SetValueResponse {
        return {
            ...val,
            isSecret: (val.isSecret) ?? false,
        };
    }

    /**
     * The properties of the source code repository.
     */
    export interface SourcePropertiesResponse {
        /**
         * The branch name of the source code.
         */
        branch?: string;
        /**
         * The full URL to the source code repository
         */
        repositoryUrl: string;
        /**
         * The authorization properties for accessing the source code repository and to set up
         * webhooks for notifications.
         */
        sourceControlAuthProperties?: AuthInfoResponse;
        /**
         * The type of source control service.
         */
        sourceControlType: string;
    }

    /**
     * Describes the credential parameters for accessing the source registry.
     */
    export interface SourceRegistryCredentialsResponse {
        /**
         * The authentication mode which determines the source registry login scope. The credentials for the source registry
         * will be generated using the given scope. These credentials will be used to login to
         * the source registry during the run.
         */
        loginMode?: string;
    }

    /**
     * The properties of a source based trigger.
     */
    export interface SourceTriggerResponse {
        /**
         * The name of the trigger.
         */
        name: string;
        /**
         * The properties that describes the source(code) for the task.
         */
        sourceRepository: SourcePropertiesResponse;
        /**
         * The source event corresponding to the trigger.
         */
        sourceTriggerEvents: string[];
        /**
         * The current status of trigger.
         */
        status?: string;
    }
    /**
     * sourceTriggerResponseProvideDefaults sets the appropriate defaults for SourceTriggerResponse
     */
    export function sourceTriggerResponseProvideDefaults(val: SourceTriggerResponse): SourceTriggerResponse {
        return {
            ...val,
            status: (val.status) ?? "Enabled",
        };
    }

    /**
     * The properties of a timer trigger.
     */
    export interface TimerTriggerResponse {
        /**
         * The name of the trigger.
         */
        name: string;
        /**
         * The CRON expression for the task schedule
         */
        schedule: string;
        /**
         * The current status of trigger.
         */
        status?: string;
    }
    /**
     * timerTriggerResponseProvideDefaults sets the appropriate defaults for TimerTriggerResponse
     */
    export function timerTriggerResponseProvideDefaults(val: TimerTriggerResponse): TimerTriggerResponse {
        return {
            ...val,
            status: (val.status) ?? "Enabled",
        };
    }

    /**
     * The properties of a trigger.
     */
    export interface TriggerPropertiesResponse {
        /**
         * The trigger based on base image dependencies.
         */
        baseImageTrigger?: BaseImageTriggerResponse;
        /**
         * The collection of triggers based on source code repository.
         */
        sourceTriggers?: SourceTriggerResponse[];
        /**
         * The collection of timer triggers.
         */
        timerTriggers?: TimerTriggerResponse[];
    }
    /**
     * triggerPropertiesResponseProvideDefaults sets the appropriate defaults for TriggerPropertiesResponse
     */
    export function triggerPropertiesResponseProvideDefaults(val: TriggerPropertiesResponse): TriggerPropertiesResponse {
        return {
            ...val,
            baseImageTrigger: (val.baseImageTrigger ? baseImageTriggerResponseProvideDefaults(val.baseImageTrigger) : undefined),
        };
    }

    export interface UserIdentityPropertiesResponse {
        /**
         * The client id of user assigned identity.
         */
        clientId?: string;
        /**
         * The principal id of user assigned identity.
         */
        principalId?: string;
    }
