import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * ApiKey authentication gives a name and a value that can be included in either the request header or query parameters.
     */
    export interface ApiKeyAuthenticationArgs {
        /**
         * The location of the authentication key/value pair in the request.
         */
        in: pulumi.Input<enums.RestAuthLocation>;
        /**
         * The key name of the authentication key/value pair.
         */
        name: pulumi.Input<string>;
        /**
         * The authentication type.
         * Expected value is 'ApiKey'.
         */
        type: pulumi.Input<"ApiKey">;
        /**
         * The value of the authentication key/value pair.
         */
        value: pulumi.Input<string>;
    }

    /**
     * Defines the properties of a health check step.
     */
    export interface HealthCheckStepPropertiesArgs {
        /**
         * The health check step attributes
         */
        attributes: pulumi.Input<RestHealthCheckStepAttributesArgs>;
        /**
         * The type of step.
         * Expected value is 'HealthCheck'.
         */
        stepType: pulumi.Input<"HealthCheck">;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityArgs {
        /**
         * The list of identities.
         */
        identityIds: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The identity type.
         */
        type: pulumi.Input<string>;
    }

    /**
     * The properties that define a step.
     */
    export interface PrePostStepArgs {
        /**
         * The resource Id of the step to be run.
         */
        stepId: pulumi.Input<string>;
    }

    /**
     * A REST based health check
     */
    export interface RestHealthCheckArgs {
        /**
         * A unique name for this check.
         */
        name: pulumi.Input<string>;
        /**
         * The request to the health provider.
         */
        request: pulumi.Input<RestRequestArgs>;
        /**
         * The expected response from the health provider. If no expected response is provided, the default is to expect the received response to have an HTTP status code of 200 OK.
         */
        response?: pulumi.Input<RestResponseArgs>;
    }

    /**
     * Defines the REST health check step properties.
     */
    export interface RestHealthCheckStepAttributesArgs {
        /**
         * The list of checks that form the health check step.
         */
        healthChecks: pulumi.Input<pulumi.Input<RestHealthCheckArgs>[]>;
        /**
         * The duration in ISO 8601 format for which the resource is expected to be continuously healthy. If maxElasticDuration is specified, healthy state duration is enforced after the detection of first healthy signal.
         */
        healthyStateDuration: pulumi.Input<string>;
        /**
         * The duration in ISO 8601 format for which the health check waits for the resource to become healthy. Health check fails if it doesn't. Health check starts to enforce healthyStateDuration once resource becomes healthy.
         */
        maxElasticDuration?: pulumi.Input<string>;
        /**
         * The type of health check.
         * Expected value is 'REST'.
         */
        type: pulumi.Input<"REST">;
        /**
         * The duration in ISO 8601 format for which health check waits idly without any checks.
         */
        waitDuration?: pulumi.Input<string>;
    }

    /**
     * The properties that make up a REST request
     */
    export interface RestRequestArgs {
        /**
         * The authentication information required in the request to the health provider.
         */
        authentication: pulumi.Input<ApiKeyAuthenticationArgs | RolloutIdentityAuthenticationArgs>;
        /**
         * The HTTP method to use for the request.
         */
        method: pulumi.Input<enums.RestRequestMethod>;
        /**
         * The HTTP URI to use for the request.
         */
        uri: pulumi.Input<string>;
    }

    /**
     * The properties that make up the expected REST response
     */
    export interface RestResponseArgs {
        /**
         * The regular expressions to match the response content with.
         */
        regex?: pulumi.Input<RestResponseRegexArgs>;
        /**
         * The HTTP status codes expected in a successful health check response. The response is expected to match one of the given status codes. If no expected status codes are provided, default expected status code is 200 OK.
         */
        successStatusCodes?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The regular expressions to match the response content with.
     */
    export interface RestResponseRegexArgs {
        /**
         * Indicates whether any or all of the expressions should match with the response content.
         */
        matchQuantifier?: pulumi.Input<enums.RestMatchQuantifier>;
        /**
         * The list of regular expressions.
         */
        matches?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * RolloutIdentity uses the user-assigned managed identity authentication context specified in the Identity property during rollout creation.
     */
    export interface RolloutIdentityAuthenticationArgs {
        /**
         * The authentication type.
         * Expected value is 'RolloutIdentity'.
         */
        type: pulumi.Input<"RolloutIdentity">;
    }

    /**
     * Defines the properties to access the artifacts using an Azure Storage SAS URI.
     */
    export interface SasAuthenticationArgs {
        /**
         * The SAS URI to the Azure Storage blob container. Any offset from the root of the container to where the artifacts are located can be defined in the artifactRoot.
         */
        sasUri: pulumi.Input<string>;
        /**
         * The authentication type
         * Expected value is 'Sas'.
         */
        type: pulumi.Input<"Sas">;
    }

    /**
     * Defines the artifacts of a service unit.
     */
    export interface ServiceUnitArtifactsArgs {
        /**
         * The path to the ARM parameters file relative to the artifact source.
         */
        parametersArtifactSourceRelativePath?: pulumi.Input<string>;
        /**
         * The full URI of the ARM parameters file with the SAS token.
         */
        parametersUri?: pulumi.Input<string>;
        /**
         * The path to the ARM template file relative to the artifact source.
         */
        templateArtifactSourceRelativePath?: pulumi.Input<string>;
        /**
         * The full URI of the ARM template file with the SAS token.
         */
        templateUri?: pulumi.Input<string>;
    }

    /**
     * The properties that define a Step group in a rollout.
     */
    export interface StepGroupArgs {
        /**
         * The list of step group names on which this step group depends on.
         */
        dependsOnStepGroups?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The resource Id of service unit to be deployed. The service unit should be from the service topology referenced in targetServiceTopologyId
         */
        deploymentTargetId: pulumi.Input<string>;
        /**
         * The name of the step group.
         */
        name: pulumi.Input<string>;
        /**
         * The list of steps to be run after deploying the target.
         */
        postDeploymentSteps?: pulumi.Input<pulumi.Input<PrePostStepArgs>[]>;
        /**
         * The list of steps to be run before deploying the target.
         */
        preDeploymentSteps?: pulumi.Input<pulumi.Input<PrePostStepArgs>[]>;
    }

    /**
     * The parameters for the wait step.
     */
    export interface WaitStepAttributesArgs {
        /**
         * The duration in ISO 8601 format of how long the wait should be.
         */
        duration: pulumi.Input<string>;
    }

    /**
     * Defines the properties of a Wait step.
     */
    export interface WaitStepPropertiesArgs {
        /**
         * The Wait attributes
         */
        attributes: pulumi.Input<WaitStepAttributesArgs>;
        /**
         * The type of step.
         * Expected value is 'Wait'.
         */
        stepType: pulumi.Input<"Wait">;
    }
