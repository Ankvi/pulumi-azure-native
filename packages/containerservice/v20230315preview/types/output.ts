import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The resource management error additional info.
     */
    export interface ErrorAdditionalInfoResponse {
        /**
         * The additional info.
         */
        info: any;
        /**
         * The additional info type.
         */
        type: string;
    }

    /**
     * The error detail.
     */
    export interface ErrorDetailResponse {
        /**
         * The error additional info.
         */
        additionalInfo: ErrorAdditionalInfoResponse[];
        /**
         * The error code.
         */
        code: string;
        /**
         * The error details.
         */
        details: ErrorDetailResponse[];
        /**
         * The error message.
         */
        message: string;
        /**
         * The error target.
         */
        target: string;
    }

    /**
     * One credential result item.
     */
    export interface FleetCredentialResultResponse {
        /**
         * The name of the credential.
         */
        name: string;
        /**
         * Base64-encoded Kubernetes configuration file.
         */
        value: string;
    }

    /**
     * The FleetHubProfile configures the fleet hub.
     */
    export interface FleetHubProfileResponse {
        /**
         * DNS prefix used to create the FQDN for the Fleet hub.
         */
        dnsPrefix?: string;
        /**
         * The FQDN of the Fleet hub.
         */
        fqdn: string;
        /**
         * The Kubernetes version of the Fleet hub.
         */
        kubernetesVersion: string;
    }

    /**
     * The update to be applied to the ManagedClusters.
     */
    export interface ManagedClusterUpdateResponse {
        /**
         * The upgrade to apply to the ManagedClusters.
         */
        upgrade: ManagedClusterUpgradeSpecResponse;
    }

    /**
     * The upgrade to apply to a ManagedCluster.
     */
    export interface ManagedClusterUpgradeSpecResponse {
        /**
         * The Kubernetes version to upgrade the member clusters to.
         */
        kubernetesVersion?: string;
        /**
         * The upgrade type.
         * Full requires the KubernetesVersion property to be set.
         * NodeImageOnly requires the KubernetesVersion property not to be set.
         */
        type: string;
    }

    /**
     * The status of a member update operation.
     */
    export interface MemberUpdateStatusResponse {
        /**
         * The Azure resource id of the target Kubernetes cluster.
         */
        clusterResourceId: string;
        /**
         * The name of the FleetMember.
         */
        name: string;
        /**
         * The operation resource id of the latest attempt to perform the operation.
         */
        operationId: string;
        /**
         * The status of the MemberUpdate operation.
         */
        status: UpdateStatusResponse;
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of resource creation (UTC).
         */
        createdAt?: string;
        /**
         * The identity that created the resource.
         */
        createdBy?: string;
        /**
         * The type of identity that created the resource.
         */
        createdByType?: string;
        /**
         * The timestamp of resource last modification (UTC)
         */
        lastModifiedAt?: string;
        /**
         * The identity that last modified the resource.
         */
        lastModifiedBy?: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedByType?: string;
    }

    /**
     * A group to be updated.
     */
    export interface UpdateGroupResponse {
        /**
         * Name of the group.
         * It must match a group name of an existing fleet member. 
         */
        name: string;
    }

    /**
     * The status of a UpdateGroup.
     */
    export interface UpdateGroupStatusResponse {
        /**
         * The list of member this UpdateGroup updates.
         */
        members: MemberUpdateStatusResponse[];
        /**
         * The name of the UpdateGroup.
         */
        name: string;
        /**
         * The status of the UpdateGroup.
         */
        status: UpdateStatusResponse;
    }

    /**
     * The status of a UpdateRun.
     */
    export interface UpdateRunStatusResponse {
        /**
         * The stages composing an update run. Stages are run sequentially withing an UpdateRun.
         */
        stages: UpdateStageStatusResponse[];
        /**
         * The status of the UpdateRun.
         */
        status: UpdateStatusResponse;
    }

    /**
     * Defines the update sequence of the clusters via stages and groups.
     *
     * Stages within a run are executed sequentially one after another.
     * Groups within a stage are executed in parallel.
     * Member clusters within a group are updated sequentially one after another.
     *
     * A valid strategy contains no duplicate groups within or across stages.
     */
    export interface UpdateRunStrategyResponse {
        /**
         * The list of stages that compose this update run. Min size: 1.
         */
        stages: UpdateStageResponse[];
    }

    /**
     * Defines a stage which contains the groups to update and the steps to take (e.g., wait for a time period) before starting the next stage.
     */
    export interface UpdateStageResponse {
        /**
         * The time in seconds to wait at the end of this stage before starting the next one. Defaults to 0 seconds if unspecified.
         */
        afterStageWaitInSeconds?: number;
        /**
         * Defines the groups to be executed in parallel in this stage. Duplicate groups are not allowed. Min size: 1.
         */
        groups?: UpdateGroupResponse[];
        /**
         * The name of the stage. Must be unique within the UpdateRun.
         */
        name: string;
    }

    /**
     * The status of a UpdateStage.
     */
    export interface UpdateStageStatusResponse {
        /**
         * The status of the wait period configured on the UpdateStage.
         */
        afterStageWaitStatus: WaitStatusResponse;
        /**
         * The list of groups to be updated as part of this UpdateStage.
         */
        groups: UpdateGroupStatusResponse[];
        /**
         * The name of the UpdateStage.
         */
        name: string;
        /**
         * The status of the UpdateStage.
         */
        status: UpdateStatusResponse;
    }

    /**
     * The status for an operation or group of operations.
     */
    export interface UpdateStatusResponse {
        /**
         * The time the operation or group was completed.
         */
        completedTime: string;
        /**
         * The error details when a failure is encountered.
         */
        error: ErrorDetailResponse;
        /**
         * The time the operation or group was started.
         */
        startTime: string;
        /**
         * The State of the operation or group.
         */
        state: string;
    }

    /**
     * The status of the wait duration.
     */
    export interface WaitStatusResponse {
        /**
         * The status of the wait duration.
         */
        status: UpdateStatusResponse;
        /**
         * The wait duration configured in seconds.
         */
        waitDurationInSeconds: number;
    }
