import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The limited preview of Kubernetes Cluster Management from the Azure supports:
 * 1. Using a simple turn-key option in Azure Portal, deploy a Kubernetes cluster on your Azure Stack Edge device.
 * 2. Configure Kubernetes cluster running on your device with Arc enabled Kubernetes with a click of a button in the Azure Portal.
 *     Azure Arc enables organizations to view, manage, and govern their on-premises Kubernetes clusters using the Azure Portal, command line tools, and APIs.
 * 3. Easily configure Persistent Volumes using SMB and NFS shares for storing container data.
 *     For more information, refer to the document here: https://databoxupdatepackages.blob.core.windows.net/documentation/Microsoft-Azure-Stack-Edge-K8-Cloud-Management-20210323.pdf
 *     Or Demo: https://databoxupdatepackages.blob.core.windows.net/documentation/Microsoft-Azure-Stack-Edge-K8S-Cloud-Management-20210323.mp4
 *     By using this feature, you agree to the preview legal terms. See the https://azure.microsoft.com/en-us/support/legal/preview-supplemental-terms/
 *
 * Uses Azure REST API version 2023-07-01. In version 2.x of the Azure Native provider, it used API version 2022-03-01.
 */
export class KubernetesRole extends pulumi.CustomResource {
    /**
     * Get an existing KubernetesRole resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): KubernetesRole {
        return new KubernetesRole(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:databoxedge:KubernetesRole';

    /**
     * Returns true if the given object is an instance of KubernetesRole.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KubernetesRole {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KubernetesRole.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Host OS supported by the Kubernetes role.
     */
    public readonly hostPlatform!: pulumi.Output<string>;
    /**
     * Platform where the runtime is hosted.
     */
    public /*out*/ readonly hostPlatformType!: pulumi.Output<string>;
    /**
     * Role type.
     * Expected value is 'Kubernetes'.
     */
    public readonly kind!: pulumi.Output<"Kubernetes">;
    /**
     * Kubernetes cluster configuration
     */
    public readonly kubernetesClusterInfo!: pulumi.Output<types.outputs.KubernetesClusterInfoResponse>;
    /**
     * Kubernetes role resources
     */
    public readonly kubernetesRoleResources!: pulumi.Output<types.outputs.KubernetesRoleResourcesResponse>;
    /**
     * The object name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * State of Kubernetes deployment
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Role status.
     */
    public readonly roleStatus!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of Role
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The hierarchical type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a KubernetesRole resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KubernetesRoleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.deviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceName'");
            }
            if ((!args || args.hostPlatform === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostPlatform'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.kubernetesClusterInfo === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kubernetesClusterInfo'");
            }
            if ((!args || args.kubernetesRoleResources === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kubernetesRoleResources'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.roleStatus === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleStatus'");
            }
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["hostPlatform"] = args ? args.hostPlatform : undefined;
            resourceInputs["kind"] = "Kubernetes";
            resourceInputs["kubernetesClusterInfo"] = args ? args.kubernetesClusterInfo : undefined;
            resourceInputs["kubernetesRoleResources"] = args ? args.kubernetesRoleResources : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["roleStatus"] = args ? args.roleStatus : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["hostPlatformType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["hostPlatform"] = undefined /*out*/;
            resourceInputs["hostPlatformType"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["kubernetesClusterInfo"] = undefined /*out*/;
            resourceInputs["kubernetesRoleResources"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["roleStatus"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:databoxedge/v20190301:KubernetesRole" }, { type: "azure-native:databoxedge/v20190701:KubernetesRole" }, { type: "azure-native:databoxedge/v20190801:KubernetesRole" }, { type: "azure-native:databoxedge/v20200501preview:KubernetesRole" }, { type: "azure-native:databoxedge/v20200901:KubernetesRole" }, { type: "azure-native:databoxedge/v20200901preview:KubernetesRole" }, { type: "azure-native:databoxedge/v20201201:KubernetesRole" }, { type: "azure-native:databoxedge/v20210201:KubernetesRole" }, { type: "azure-native:databoxedge/v20210201preview:KubernetesRole" }, { type: "azure-native:databoxedge/v20210601:KubernetesRole" }, { type: "azure-native:databoxedge/v20210601preview:KubernetesRole" }, { type: "azure-native:databoxedge/v20220301:KubernetesRole" }, { type: "azure-native:databoxedge/v20220401preview:KubernetesRole" }, { type: "azure-native:databoxedge/v20221201preview:KubernetesRole" }, { type: "azure-native:databoxedge/v20230101preview:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge/v20230101preview:IoTRole" }, { type: "azure-native:databoxedge/v20230101preview:KubernetesRole" }, { type: "azure-native:databoxedge/v20230101preview:MECRole" }, { type: "azure-native:databoxedge/v20230701:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge/v20230701:IoTRole" }, { type: "azure-native:databoxedge/v20230701:KubernetesRole" }, { type: "azure-native:databoxedge/v20230701:MECRole" }, { type: "azure-native:databoxedge/v20231201:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge/v20231201:IoTRole" }, { type: "azure-native:databoxedge/v20231201:KubernetesRole" }, { type: "azure-native:databoxedge/v20231201:MECRole" }, { type: "azure-native:databoxedge:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge:IoTRole" }, { type: "azure-native:databoxedge:MECRole" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(KubernetesRole.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a KubernetesRole resource.
 */
export interface KubernetesRoleArgs {
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * Host OS supported by the Kubernetes role.
     */
    hostPlatform: pulumi.Input<string | types.enums.PlatformType>;
    /**
     * Role type.
     * Expected value is 'Kubernetes'.
     */
    kind: pulumi.Input<"Kubernetes">;
    /**
     * Kubernetes cluster configuration
     */
    kubernetesClusterInfo: pulumi.Input<types.inputs.KubernetesClusterInfoArgs>;
    /**
     * Kubernetes role resources
     */
    kubernetesRoleResources: pulumi.Input<types.inputs.KubernetesRoleResourcesArgs>;
    /**
     * The role name.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Role status.
     */
    roleStatus: pulumi.Input<string | types.enums.RoleStatus>;
}