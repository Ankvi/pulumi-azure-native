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
     * Base properties for any task step.
     */
    export interface TaskStepPropertiesArgs {
        /**
         * The token (git PAT or SAS token of storage account blob) associated with the context for a step.
         */
        contextAccessToken?: pulumi.Input<string>;
        /**
         * The URL(absolute or relative) of the source context for the task step.
         */
        contextPath?: pulumi.Input<string>;
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
