import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * ApiKey authentication gives a name and a value that can be included in either the request header or query parameters.
     */
    export interface ApiKeyAuthenticationResponse {
        /**
         * The location of the authentication key/value pair in the request.
         */
        in: string;
        /**
         * The key name of the authentication key/value pair.
         */
        name: string;
        /**
         * The authentication type.
         * Expected value is 'ApiKey'.
         */
        type: "ApiKey";
        /**
         * The value of the authentication key/value pair.
         */
        value: string;
    }

    /**
     * Detailed error information of any failure.
     */
    export interface CloudErrorBodyResponse {
        /**
         * Error code string.
         */
        code: string;
        /**
         * More detailed error information.
         */
        details?: CloudErrorBodyResponse[];
        /**
         * Descriptive error information.
         */
        message: string;
        /**
         * Error target
         */
        target?: string;
    }

    /**
     * Defines the properties of a health check step.
     */
    export interface HealthCheckStepPropertiesResponse {
        /**
         * The health check step attributes
         */
        attributes: RestHealthCheckStepAttributesResponse;
        /**
         * The type of step.
         * Expected value is 'HealthCheck'.
         */
        stepType: "HealthCheck";
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityResponse {
        /**
         * The list of identities.
         */
        identityIds: string[];
        /**
         * The identity type.
         */
        type: string;
    }

    /**
     * Supplementary contextual messages during a rollout.
     */
    export interface MessageResponse {
        /**
         * The actual message text.
         */
        message: string;
        /**
         * Time in UTC this message was provided.
         */
        timeStamp: string;
    }

    /**
     * The properties that define a step.
     */
    export interface PrePostStepResponse {
        /**
         * The resource Id of the step to be run.
         */
        stepId: string;
    }

    /**
     * Individual resource operation information.
     */
    export interface ResourceOperationResponse {
        /**
         * Unique identifier of the operation. For ARM resources, this is the operationId obtained from ARM service.
         */
        operationId: string;
        /**
         * State of the resource deployment. For ARM resources, this is the current provisioning state of the resource.
         */
        provisioningState: string;
        /**
         * Name of the resource as specified in the artifacts. For ARM resources, this is the name of the resource specified in the template.
         */
        resourceName?: string;
        /**
         * Type of the resource as specified in the artifacts. For ARM resources, this is the type of the resource specified in the template.
         */
        resourceType?: string;
        /**
         * Http status code of the operation.
         */
        statusCode: string;
        /**
         * Descriptive information of the resource operation.
         */
        statusMessage: string;
    }

    /**
     * A REST based health check
     */
    export interface RestHealthCheckResponse {
        /**
         * A unique name for this check.
         */
        name: string;
        /**
         * The request to the health provider.
         */
        request: RestRequestResponse;
        /**
         * The expected response from the health provider. If no expected response is provided, the default is to expect the received response to have an HTTP status code of 200 OK.
         */
        response?: RestResponseResponse;
    }

    /**
     * Defines the REST health check step properties.
     */
    export interface RestHealthCheckStepAttributesResponse {
        /**
         * The list of checks that form the health check step.
         */
        healthChecks: RestHealthCheckResponse[];
        /**
         * The duration in ISO 8601 format for which the resource is expected to be continuously healthy. If maxElasticDuration is specified, healthy state duration is enforced after the detection of first healthy signal.
         */
        healthyStateDuration: string;
        /**
         * The duration in ISO 8601 format for which the health check waits for the resource to become healthy. Health check fails if it doesn't. Health check starts to enforce healthyStateDuration once resource becomes healthy.
         */
        maxElasticDuration?: string;
        /**
         * The type of health check.
         * Expected value is 'REST'.
         */
        type: "REST";
        /**
         * The duration in ISO 8601 format for which health check waits idly without any checks.
         */
        waitDuration?: string;
    }

    /**
     * The properties that make up a REST request
     */
    export interface RestRequestResponse {
        /**
         * The authentication information required in the request to the health provider.
         */
        authentication: ApiKeyAuthenticationResponse | RolloutIdentityAuthenticationResponse;
        /**
         * The HTTP method to use for the request.
         */
        method: string;
        /**
         * The HTTP URI to use for the request.
         */
        uri: string;
    }

    /**
     * The properties that make up the expected REST response
     */
    export interface RestResponseResponse {
        /**
         * The regular expressions to match the response content with.
         */
        regex?: RestResponseResponseRegex;
        /**
         * The HTTP status codes expected in a successful health check response. The response is expected to match one of the given status codes. If no expected status codes are provided, default expected status code is 200 OK.
         */
        successStatusCodes?: string[];
    }

    /**
     * The regular expressions to match the response content with.
     */
    export interface RestResponseResponseRegex {
        /**
         * Indicates whether any or all of the expressions should match with the response content.
         */
        matchQuantifier?: string;
        /**
         * The list of regular expressions.
         */
        matches?: string[];
    }

    /**
     * RolloutIdentity uses the user-assigned managed identity authentication context specified in the Identity property during rollout creation.
     */
    export interface RolloutIdentityAuthenticationResponse {
        /**
         * The authentication type.
         * Expected value is 'RolloutIdentity'.
         */
        type: "RolloutIdentity";
    }

    /**
     * Detailed runtime information of the rollout.
     */
    export interface RolloutOperationInfoResponse {
        /**
         * The start time of the rollout in UTC. This property will not be set if the rollout has not completed yet.
         */
        endTime: string;
        /**
         * The detailed error information for any failure.
         */
        error: CloudErrorBodyResponse;
        /**
         * The ordinal count of the number of retry attempts on a rollout. 0 if no retries of the rollout have been performed. If the rollout is updated with a PUT, this count is reset to 0.
         */
        retryAttempt: number;
        /**
         * True, if all steps that succeeded on the previous run/attempt were chosen to be skipped in this retry attempt. False, otherwise.
         */
        skipSucceededOnRetry: boolean;
        /**
         * The start time of the rollout in UTC.
         */
        startTime: string;
    }

    /**
     * Defines a specific step on a target service unit.
     */
    export interface RolloutStepResponse {
        /**
         * Supplementary informative messages during rollout.
         */
        messages: MessageResponse[];
        /**
         * Name of the step.
         */
        name: string;
        /**
         * Detailed information of specific action execution.
         */
        operationInfo: StepOperationInfoResponse;
        /**
         * Set of resource operations that were performed, if any, on an Azure resource.
         */
        resourceOperations: ResourceOperationResponse[];
        /**
         * Current state of the step.
         */
        status: string;
        /**
         * The step group the current step is part of.
         */
        stepGroup?: string;
    }

    /**
     * Defines the properties to access the artifacts using an Azure Storage SAS URI.
     */
    export interface SasAuthenticationResponse {
        /**
         * The SAS URI to the Azure Storage blob container. Any offset from the root of the container to where the artifacts are located can be defined in the artifactRoot.
         */
        sasUri: string;
        /**
         * The authentication type
         * Expected value is 'Sas'.
         */
        type: "Sas";
    }

    /**
     * Defines a service.
     */
    export interface ServiceResponse {
        /**
         * Name of the service.
         */
        name?: string;
        /**
         * The detailed information about the units that make up the service.
         */
        serviceUnits?: ServiceUnitResponse[];
        /**
         * The Azure location to which the resources in the service belong to or should be deployed to.
         */
        targetLocation: string;
        /**
         * The subscription to which the resources in the service belong to or should be deployed to.
         */
        targetSubscriptionId: string;
    }

    /**
     * Defines the artifacts of a service unit.
     */
    export interface ServiceUnitArtifactsResponse {
        /**
         * The path to the ARM parameters file relative to the artifact source.
         */
        parametersArtifactSourceRelativePath?: string;
        /**
         * The full URI of the ARM parameters file with the SAS token.
         */
        parametersUri?: string;
        /**
         * The path to the ARM template file relative to the artifact source.
         */
        templateArtifactSourceRelativePath?: string;
        /**
         * The full URI of the ARM template file with the SAS token.
         */
        templateUri?: string;
    }

    /**
     * Defines a service unit.
     */
    export interface ServiceUnitResponse {
        /**
         * The artifacts for the service unit.
         */
        artifacts?: ServiceUnitArtifactsResponse;
        /**
         * Describes the type of ARM deployment to be performed on the resource.
         */
        deploymentMode: string;
        /**
         * Name of the service unit.
         */
        name?: string;
        /**
         * Detailed step information, if present.
         */
        steps?: RolloutStepResponse[];
        /**
         * The Azure Resource Group to which the resources in the service unit belong to or should be deployed to.
         */
        targetResourceGroup: string;
    }

    /**
     * The properties that define a Step group in a rollout.
     */
    export interface StepGroupResponse {
        /**
         * The list of step group names on which this step group depends on.
         */
        dependsOnStepGroups?: string[];
        /**
         * The resource Id of service unit to be deployed. The service unit should be from the service topology referenced in targetServiceTopologyId
         */
        deploymentTargetId: string;
        /**
         * The name of the step group.
         */
        name: string;
        /**
         * The list of steps to be run after deploying the target.
         */
        postDeploymentSteps?: PrePostStepResponse[];
        /**
         * The list of steps to be run before deploying the target.
         */
        preDeploymentSteps?: PrePostStepResponse[];
    }

    /**
     * Detailed information of a specific step run.
     */
    export interface StepOperationInfoResponse {
        /**
         * Unique identifier to track the request for ARM-based resources.
         */
        correlationId: string;
        /**
         * The name of the ARM deployment initiated as part of the step.
         */
        deploymentName: string;
        /**
         * End time of the action in UTC.
         */
        endTime: string;
        /**
         * The errors, if any, for the action.
         */
        error?: CloudErrorBodyResponse;
        /**
         * Last time in UTC this operation was updated.
         */
        lastUpdatedTime: string;
        /**
         * Start time of the action in UTC.
         */
        startTime: string;
    }

    /**
     * The parameters for the wait step.
     */
    export interface WaitStepAttributesResponse {
        /**
         * The duration in ISO 8601 format of how long the wait should be.
         */
        duration: string;
    }

    /**
     * Defines the properties of a Wait step.
     */
    export interface WaitStepPropertiesResponse {
        /**
         * The Wait attributes
         */
        attributes: WaitStepAttributesResponse;
        /**
         * The type of step.
         * Expected value is 'Wait'.
         */
        stepType: "Wait";
    }
