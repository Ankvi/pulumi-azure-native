import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The properties that determine the run agent configuration.
     */
    export interface AgentPropertiesArgs {
        /**
         * The CPU configuration in terms of number of cores required for the run.
         */
        cpu?: pulumi.Input<number>;
    }

    /**
     * The properties of a run argument.
     */
    export interface ArgumentArgs {
        /**
         * Flag to indicate whether the argument represents a secret and want to be removed from build logs.
         */
        isSecret?: pulumi.Input<boolean>;
        /**
         * The name of the argument.
         */
        name: pulumi.Input<string>;
        /**
         * The value of the argument.
         */
        value: pulumi.Input<string>;
    }
    /**
     * argumentArgsProvideDefaults sets the appropriate defaults for ArgumentArgs
     */
    export function argumentArgsProvideDefaults(val: ArgumentArgs): ArgumentArgs {
        return {
            ...val,
            isSecret: (val.isSecret) ?? false,
        };
    }

    /**
     * The authorization properties for accessing the source code repository.
     */
    export interface AuthInfoArgs {
        /**
         * Time in seconds that the token remains valid
         */
        expiresIn?: pulumi.Input<number>;
        /**
         * The refresh token used to refresh the access token.
         */
        refreshToken?: pulumi.Input<string>;
        /**
         * The scope of the access token.
         */
        scope?: pulumi.Input<string>;
        /**
         * The access token used to access the source control provider.
         */
        token: pulumi.Input<string>;
        /**
         * The type of Auth token.
         */
        tokenType: pulumi.Input<string | enums.TokenType>;
    }

    /**
     * The trigger based on base image dependency.
     */
    export interface BaseImageTriggerArgs {
        /**
         * The type of the auto trigger for base image dependency updates.
         */
        baseImageTriggerType: pulumi.Input<string | enums.BaseImageTriggerType>;
        /**
         * The name of the trigger.
         */
        name: pulumi.Input<string>;
        /**
         * The current status of trigger.
         */
        status?: pulumi.Input<string | enums.TriggerStatus>;
    }
    /**
     * baseImageTriggerArgsProvideDefaults sets the appropriate defaults for BaseImageTriggerArgs
     */
    export function baseImageTriggerArgsProvideDefaults(val: BaseImageTriggerArgs): BaseImageTriggerArgs {
        return {
            ...val,
            status: (val.status) ?? "Enabled",
        };
    }

    /**
     * The parameters that describes a set of credentials that will be used when a run is invoked.
     */
    export interface CredentialsArgs {
        /**
         * Describes the credential parameters for accessing other custom registries. The key
         * for the dictionary item will be the registry login server (myregistry.azurecr.io) and
         * the value of the item will be the registry credentials for accessing the registry.
         */
        customRegistries?: pulumi.Input<{[key: string]: pulumi.Input<CustomRegistryCredentialsArgs>}>;
        /**
         * Describes the credential parameters for accessing the source registry.
         */
        sourceRegistry?: pulumi.Input<SourceRegistryCredentialsArgs>;
    }

    /**
     * Describes the credentials that will be used to access a custom registry during a run.
     */
    export interface CustomRegistryCredentialsArgs {
        /**
         * Indicates the managed identity assigned to the custom credential. If a user-assigned identity
         * this value is the Client ID. If a system-assigned identity, the value will be `system`. In
         * the case of a system-assigned identity, the Client ID will be determined by the runner. This
         * identity may be used to authenticate to key vault to retrieve credentials or it may be the only 
         * source of authentication used for accessing the registry.
         */
        identity?: pulumi.Input<string>;
        /**
         * The password for logging into the custom registry. The password is a secret 
         * object that allows multiple ways of providing the value for it.
         */
        password?: pulumi.Input<SecretObjectArgs>;
        /**
         * The username for logging into the custom registry.
         */
        userName?: pulumi.Input<SecretObjectArgs>;
    }

    /**
     * The Docker build step.
     */
    export interface DockerBuildStepArgs {
        /**
         * The collection of override arguments to be used when executing this build step.
         */
        arguments?: pulumi.Input<pulumi.Input<ArgumentArgs>[]>;
        /**
         * The token (git PAT or SAS token of storage account blob) associated with the context for a step.
         */
        contextAccessToken?: pulumi.Input<string>;
        /**
         * The URL(absolute or relative) of the source context for the task step.
         */
        contextPath?: pulumi.Input<string>;
        /**
         * The Docker file path relative to the source context.
         */
        dockerFilePath: pulumi.Input<string>;
        /**
         * The fully qualified image names including the repository and tag.
         */
        imageNames?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The value of this property indicates whether the image built should be pushed to the registry or not.
         */
        isPushEnabled?: pulumi.Input<boolean>;
        /**
         * The value of this property indicates whether the image cache is enabled or not.
         */
        noCache?: pulumi.Input<boolean>;
        /**
         * The name of the target build stage for the docker build.
         */
        target?: pulumi.Input<string>;
        /**
         * The type of the step.
         * Expected value is 'Docker'.
         */
        type: pulumi.Input<"Docker">;
    }
    /**
     * dockerBuildStepArgsProvideDefaults sets the appropriate defaults for DockerBuildStepArgs
     */
    export function dockerBuildStepArgsProvideDefaults(val: DockerBuildStepArgs): DockerBuildStepArgs {
        return {
            ...val,
            isPushEnabled: (val.isPushEnabled) ?? true,
            noCache: (val.noCache) ?? false,
        };
    }

    /**
     * The properties of a encoded task step.
     */
    export interface EncodedTaskStepArgs {
        /**
         * The token (git PAT or SAS token of storage account blob) associated with the context for a step.
         */
        contextAccessToken?: pulumi.Input<string>;
        /**
         * The URL(absolute or relative) of the source context for the task step.
         */
        contextPath?: pulumi.Input<string>;
        /**
         * Base64 encoded value of the template/definition file content.
         */
        encodedTaskContent: pulumi.Input<string>;
        /**
         * Base64 encoded value of the parameters/values file content.
         */
        encodedValuesContent?: pulumi.Input<string>;
        /**
         * The type of the step.
         * Expected value is 'EncodedTask'.
         */
        type: pulumi.Input<"EncodedTask">;
        /**
         * The collection of overridable values that can be passed when running a task.
         */
        values?: pulumi.Input<pulumi.Input<SetValueArgs>[]>;
    }

    /**
     * The properties of a task step.
     */
    export interface FileTaskStepArgs {
        /**
         * The token (git PAT or SAS token of storage account blob) associated with the context for a step.
         */
        contextAccessToken?: pulumi.Input<string>;
        /**
         * The URL(absolute or relative) of the source context for the task step.
         */
        contextPath?: pulumi.Input<string>;
        /**
         * The task template/definition file path relative to the source context.
         */
        taskFilePath: pulumi.Input<string>;
        /**
         * The type of the step.
         * Expected value is 'FileTask'.
         */
        type: pulumi.Input<"FileTask">;
        /**
         * The collection of overridable values that can be passed when running a task.
         */
        values?: pulumi.Input<pulumi.Input<SetValueArgs>[]>;
        /**
         * The task values/parameters file path relative to the source context.
         */
        valuesFilePath?: pulumi.Input<string>;
    }

    /**
     * Managed identity for the resource.
     */
    export interface IdentityPropertiesArgs {
        /**
         * The principal ID of resource identity.
         */
        principalId?: pulumi.Input<string>;
        /**
         * The tenant ID of resource.
         */
        tenantId?: pulumi.Input<string>;
        /**
         * The identity type.
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
        /**
         * The list of user identities associated with the resource. The user identity 
         * dictionary key references will be ARM resource ids in the form: 
         * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
         *     providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<UserIdentityPropertiesArgs>}>;
    }

    /**
     * The platform properties against which the run has to happen.
     */
    export interface PlatformPropertiesArgs {
        /**
         * The OS architecture.
         */
        architecture?: pulumi.Input<string | enums.Architecture>;
        /**
         * The operating system type required for the run.
         */
        os: pulumi.Input<string | enums.OS>;
        /**
         * Variant of the CPU.
         */
        variant?: pulumi.Input<string | enums.Variant>;
    }

    /**
     * Describes the properties of a secret object value.
     */
    export interface SecretObjectArgs {
        /**
         * The type of the secret object which determines how the value of the secret object has to be
         * interpreted.
         */
        type?: pulumi.Input<string | enums.SecretObjectType>;
        /**
         * The value of the secret. The format of this value will be determined
         * based on the type of the secret object. If the type is Opaque, the value will be
         * used as is without any modification.
         */
        value?: pulumi.Input<string>;
    }

    /**
     * The properties of a overridable value that can be passed to a task template.
     */
    export interface SetValueArgs {
        /**
         * Flag to indicate whether the value represents a secret or not.
         */
        isSecret?: pulumi.Input<boolean>;
        /**
         * The name of the overridable value.
         */
        name: pulumi.Input<string>;
        /**
         * The overridable value.
         */
        value: pulumi.Input<string>;
    }
    /**
     * setValueArgsProvideDefaults sets the appropriate defaults for SetValueArgs
     */
    export function setValueArgsProvideDefaults(val: SetValueArgs): SetValueArgs {
        return {
            ...val,
            isSecret: (val.isSecret) ?? false,
        };
    }

    /**
     * The properties of the source code repository.
     */
    export interface SourcePropertiesArgs {
        /**
         * The branch name of the source code.
         */
        branch?: pulumi.Input<string>;
        /**
         * The full URL to the source code repository
         */
        repositoryUrl: pulumi.Input<string>;
        /**
         * The authorization properties for accessing the source code repository and to set up
         * webhooks for notifications.
         */
        sourceControlAuthProperties?: pulumi.Input<AuthInfoArgs>;
        /**
         * The type of source control service.
         */
        sourceControlType: pulumi.Input<string | enums.SourceControlType>;
    }

    /**
     * Describes the credential parameters for accessing the source registry.
     */
    export interface SourceRegistryCredentialsArgs {
        /**
         * The authentication mode which determines the source registry login scope. The credentials for the source registry
         * will be generated using the given scope. These credentials will be used to login to
         * the source registry during the run.
         */
        loginMode?: pulumi.Input<string | enums.SourceRegistryLoginMode>;
    }

    /**
     * The properties of a source based trigger.
     */
    export interface SourceTriggerArgs {
        /**
         * The name of the trigger.
         */
        name: pulumi.Input<string>;
        /**
         * The properties that describes the source(code) for the task.
         */
        sourceRepository: pulumi.Input<SourcePropertiesArgs>;
        /**
         * The source event corresponding to the trigger.
         */
        sourceTriggerEvents: pulumi.Input<pulumi.Input<string | enums.SourceTriggerEvent>[]>;
        /**
         * The current status of trigger.
         */
        status?: pulumi.Input<string | enums.TriggerStatus>;
    }
    /**
     * sourceTriggerArgsProvideDefaults sets the appropriate defaults for SourceTriggerArgs
     */
    export function sourceTriggerArgsProvideDefaults(val: SourceTriggerArgs): SourceTriggerArgs {
        return {
            ...val,
            status: (val.status) ?? "Enabled",
        };
    }

    /**
     * The properties of a timer trigger.
     */
    export interface TimerTriggerArgs {
        /**
         * The name of the trigger.
         */
        name: pulumi.Input<string>;
        /**
         * The CRON expression for the task schedule
         */
        schedule: pulumi.Input<string>;
        /**
         * The current status of trigger.
         */
        status?: pulumi.Input<string | enums.TriggerStatus>;
    }
    /**
     * timerTriggerArgsProvideDefaults sets the appropriate defaults for TimerTriggerArgs
     */
    export function timerTriggerArgsProvideDefaults(val: TimerTriggerArgs): TimerTriggerArgs {
        return {
            ...val,
            status: (val.status) ?? "Enabled",
        };
    }

    /**
     * The properties of a trigger.
     */
    export interface TriggerPropertiesArgs {
        /**
         * The trigger based on base image dependencies.
         */
        baseImageTrigger?: pulumi.Input<BaseImageTriggerArgs>;
        /**
         * The collection of triggers based on source code repository.
         */
        sourceTriggers?: pulumi.Input<pulumi.Input<SourceTriggerArgs>[]>;
        /**
         * The collection of timer triggers.
         */
        timerTriggers?: pulumi.Input<pulumi.Input<TimerTriggerArgs>[]>;
    }
    /**
     * triggerPropertiesArgsProvideDefaults sets the appropriate defaults for TriggerPropertiesArgs
     */
    export function triggerPropertiesArgsProvideDefaults(val: TriggerPropertiesArgs): TriggerPropertiesArgs {
        return {
            ...val,
            baseImageTrigger: (val.baseImageTrigger ? pulumi.output(val.baseImageTrigger).apply(baseImageTriggerArgsProvideDefaults) : undefined),
        };
    }

    export interface UserIdentityPropertiesArgs {
        /**
         * The client id of user assigned identity.
         */
        clientId?: pulumi.Input<string>;
        /**
         * The principal id of user assigned identity.
         */
        principalId?: pulumi.Input<string>;
    }
