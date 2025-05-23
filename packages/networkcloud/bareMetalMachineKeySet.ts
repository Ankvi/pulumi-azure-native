import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Uses Azure REST API version 2025-02-01. In version 2.x of the Azure Native provider, it used API version 2023-10-01-preview.
 *
 * Other available API versions: 2024-07-01, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native networkcloud [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class BareMetalMachineKeySet extends pulumi.CustomResource {
    /**
     * Get an existing BareMetalMachineKeySet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BareMetalMachineKeySet {
        return new BareMetalMachineKeySet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:networkcloud:BareMetalMachineKeySet';

    /**
     * Returns true if the given object is an instance of BareMetalMachineKeySet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BareMetalMachineKeySet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BareMetalMachineKeySet.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The object ID of Azure Active Directory group that all users in the list must be in for access to be granted. Users that are not in the group will not have access.
     */
    public readonly azureGroupId!: pulumi.Output<string>;
    /**
     * The more detailed status of the key set.
     */
    public /*out*/ readonly detailedStatus!: pulumi.Output<string>;
    /**
     * The descriptive message about the current detailed status.
     */
    public /*out*/ readonly detailedStatusMessage!: pulumi.Output<string>;
    /**
     * Resource ETag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The date and time after which the users in this key set will be removed from the bare metal machines.
     */
    public readonly expiration!: pulumi.Output<string>;
    /**
     * The extended location of the cluster associated with the resource.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse>;
    /**
     * The list of IP addresses of jump hosts with management network access from which a login will be allowed for the users.
     */
    public readonly jumpHostsAllowed!: pulumi.Output<string[]>;
    /**
     * The last time this key set was validated.
     */
    public /*out*/ readonly lastValidation!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The name of the group that users will be assigned to on the operating system of the machines.
     */
    public readonly osGroupName!: pulumi.Output<string | undefined>;
    /**
     * The access level allowed for the users in this key set.
     */
    public readonly privilegeLevel!: pulumi.Output<string>;
    /**
     * The provisioning state of the bare metal machine key set.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The unique list of permitted users.
     */
    public readonly userList!: pulumi.Output<types.outputs.KeySetUserResponse[]>;
    /**
     * The status evaluation of each user.
     */
    public /*out*/ readonly userListStatus!: pulumi.Output<types.outputs.KeySetUserStatusResponse[]>;

    /**
     * Create a BareMetalMachineKeySet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BareMetalMachineKeySetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.azureGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'azureGroupId'");
            }
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.expiration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'expiration'");
            }
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.jumpHostsAllowed === undefined) && !opts.urn) {
                throw new Error("Missing required property 'jumpHostsAllowed'");
            }
            if ((!args || args.privilegeLevel === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privilegeLevel'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.userList === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userList'");
            }
            resourceInputs["azureGroupId"] = args ? args.azureGroupId : undefined;
            resourceInputs["bareMetalMachineKeySetName"] = args ? args.bareMetalMachineKeySetName : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["expiration"] = args ? args.expiration : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["jumpHostsAllowed"] = args ? args.jumpHostsAllowed : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["osGroupName"] = args ? args.osGroupName : undefined;
            resourceInputs["privilegeLevel"] = args ? args.privilegeLevel : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["userList"] = args ? args.userList : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["lastValidation"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userListStatus"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["azureGroupId"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["expiration"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["jumpHostsAllowed"] = undefined /*out*/;
            resourceInputs["lastValidation"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["osGroupName"] = undefined /*out*/;
            resourceInputs["privilegeLevel"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userList"] = undefined /*out*/;
            resourceInputs["userListStatus"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:networkcloud/v20230701:BareMetalMachineKeySet" }, { type: "azure-native:networkcloud/v20231001preview:BareMetalMachineKeySet" }, { type: "azure-native:networkcloud/v20240601preview:BareMetalMachineKeySet" }, { type: "azure-native:networkcloud/v20240701:BareMetalMachineKeySet" }, { type: "azure-native:networkcloud/v20241001preview:BareMetalMachineKeySet" }, { type: "azure-native:networkcloud/v20250201:BareMetalMachineKeySet" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BareMetalMachineKeySet.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BareMetalMachineKeySet resource.
 */
export interface BareMetalMachineKeySetArgs {
    /**
     * The object ID of Azure Active Directory group that all users in the list must be in for access to be granted. Users that are not in the group will not have access.
     */
    azureGroupId: pulumi.Input<string>;
    /**
     * The name of the bare metal machine key set.
     */
    bareMetalMachineKeySetName?: pulumi.Input<string>;
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The date and time after which the users in this key set will be removed from the bare metal machines.
     */
    expiration: pulumi.Input<string>;
    /**
     * The extended location of the cluster associated with the resource.
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * The list of IP addresses of jump hosts with management network access from which a login will be allowed for the users.
     */
    jumpHostsAllowed: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the group that users will be assigned to on the operating system of the machines.
     */
    osGroupName?: pulumi.Input<string>;
    /**
     * The access level allowed for the users in this key set.
     */
    privilegeLevel: pulumi.Input<string | types.enums.BareMetalMachineKeySetPrivilegeLevel>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The unique list of permitted users.
     */
    userList: pulumi.Input<pulumi.Input<types.inputs.KeySetUserArgs>[]>;
}