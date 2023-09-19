import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Access profile for the Fleet hub API server.
     */
    export interface APIServerAccessProfileResponse {
        /**
         * Whether to create the Fleet hub as a private cluster or not.
         */
        enablePrivateCluster?: boolean;
        /**
         * Whether to enable apiserver vnet integration for the Fleet hub or not.
         */
        enableVnetIntegration?: boolean;
        /**
         * The subnet to be used when apiserver vnet integration is enabled. It is required when creating a new Fleet with BYO vnet.
         */
        subnetId?: string;
    }

    /**
     * Agent profile for the Fleet hub.
     */
    export interface AgentProfileResponse {
        /**
         * The ID of the subnet which the Fleet hub node will join on startup. If this is not specified, a vnet and subnet will be generated and used.
         */
        subnetId?: string;
    }

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
         * The agent profile for the Fleet hub.
         */
        agentProfile?: AgentProfileResponse;
        /**
         * The access profile for the Fleet hub API server.
         */
        apiServerAccessProfile?: APIServerAccessProfileResponse;
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
         * The node image upgrade to be applied to the target nodes in update run.
         */
        nodeImageSelection?: NodeImageSelectionResponse;
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
     * Managed service identity (system assigned and/or user assigned identities)
     */
    export interface ManagedServiceIdentityResponse {
        /**
         * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        principalId: string;
        /**
         * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        tenantId: string;
        /**
         * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
         */
        type: string;
        /**
         * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
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
         * The status message after processing the member update operation.
         */
        message: string;
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
     * The node image upgrade to be applied to the target nodes in update run.
     */
    export interface NodeImageSelectionResponse {
        /**
         * The node image upgrade type.
         */
        type: string;
    }

    /**
     * The node image upgrade specs for the update run.
     */
    export interface NodeImageSelectionStatusResponse {
        /**
         * The image versions to upgrade the nodes to.
         */
        selectedNodeImageVersions: NodeImageVersionResponse[];
    }

    /**
     * The node upgrade image version.
     */
    export interface NodeImageVersionResponse {
        /**
         * The image version to upgrade the nodes to (e.g., 'AKSUbuntu-1804gen2containerd-2022.12.13').
         */
        version: string;
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
         * The name of the Fleet member group to update. 
         * It should match the name of an existing FleetMember group.
         * A group can only appear once across all UpdateStages in the UpdateRun.
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
         * The node image upgrade specs for the update run. It is only set in update run when `NodeImageSelection.type` is `Consistent`.
         */
        nodeImageSelection: NodeImageSelectionStatusResponse;
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
     * The UpdateRunStrategy configures the sequence of Stages and Groups in which the clusters will be updated.
     */
    export interface UpdateRunStrategyResponse {
        /**
         * The list of stages that compose this update run.
         */
        stages: UpdateStageResponse[];
    }

    /**
     * Contains the groups to be updated by an UpdateRun.
     * Update order:
     * - Sequential between stages: Stages run sequentially. The previous stage must complete before the next one starts.
     * - Parallel within a stage: Groups within a stage run in parallel.
     * - Sequential within a group: Clusters within a group are updated sequentially.
     */
    export interface UpdateStageResponse {
        /**
         * The time in seconds to wait at the end of this stage before starting the next one. Defaults to 0 seconds if unspecified.
         */
        afterStageWaitInSeconds?: number;
        /**
         * A list of group names that compose the stage.
         * The groups will be updated in parallel. Each group name can only appear once in the UpdateRun.
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
     * User assigned identity properties
     */
    export interface UserAssignedIdentityResponse {
        /**
         * The client ID of the assigned identity.
         */
        clientId: string;
        /**
         * The principal ID of the assigned identity.
         */
        principalId: string;
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
