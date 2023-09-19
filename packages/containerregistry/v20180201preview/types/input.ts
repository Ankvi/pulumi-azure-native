import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The platform properties against which the build has to happen.
     */
    export interface PlatformPropertiesArgs {
        /**
         * The CPU configuration in terms of number of cores required for the build.
         */
        cpu?: pulumi.Input<number>;
        /**
         * The operating system type required for the build.
         */
        osType: pulumi.Input<string | enums.OsType>;
    }

    /**
     * The authorization properties for accessing the source code repository.
     */
    export interface SourceControlAuthInfoArgs {
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
        tokenType?: pulumi.Input<string | enums.TokenType>;
    }

    /**
     * The properties of the source code repository.
     */
    export interface SourceRepositoryPropertiesArgs {
        /**
         * The value of this property indicates whether the source control commit trigger is enabled or not.
         */
        isCommitTriggerEnabled?: pulumi.Input<boolean>;
        /**
         * The full URL to the source code repository
         */
        repositoryUrl: pulumi.Input<string>;
        /**
         * The authorization properties for accessing the source code repository.
         */
        sourceControlAuthProperties?: pulumi.Input<SourceControlAuthInfoArgs>;
        /**
         * The type of source control service.
         */
        sourceControlType: pulumi.Input<string | enums.SourceControlType>;
    }
    /**
     * sourceRepositoryPropertiesArgsProvideDefaults sets the appropriate defaults for SourceRepositoryPropertiesArgs
     */
    export function sourceRepositoryPropertiesArgsProvideDefaults(val: SourceRepositoryPropertiesArgs): SourceRepositoryPropertiesArgs {
        return {
            ...val,
            isCommitTriggerEnabled: (val.isCommitTriggerEnabled) ?? false,
        };
    }
