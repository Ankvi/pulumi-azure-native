import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The lab resource.
 */
export class Lab extends pulumi.CustomResource {
    /**
     * Get an existing Lab resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Lab {
        return new Lab(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:labservices/v20230607:Lab';

    /**
     * Returns true if the given object is an instance of Lab.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Lab {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Lab.__pulumiType;
    }

    /**
     * The resource auto shutdown configuration for the lab. This controls whether actions are taken on resources that are sitting idle.
     */
    public readonly autoShutdownProfile!: pulumi.Output<types.outputs.AutoShutdownProfileResponse>;
    /**
     * The connection profile for the lab. This controls settings such as web access to lab resources or whether RDP or SSH ports are open.
     */
    public readonly connectionProfile!: pulumi.Output<types.outputs.ConnectionProfileResponse>;
    /**
     * The description of the lab.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The ID of the lab plan. Used during resource creation to provide defaults and acts as a permission container when creating a lab via labs.azure.com. Setting a labPlanId on an existing lab provides organization..
     */
    public readonly labPlanId!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The network profile for the lab, typically applied via a lab plan. This profile cannot be modified once a lab has been created.
     */
    public readonly networkProfile!: pulumi.Output<types.outputs.LabNetworkProfileResponse | undefined>;
    /**
     * Current provisioning state of the lab.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Error details of last operation done on lab.
     */
    public /*out*/ readonly resourceOperationError!: pulumi.Output<types.outputs.ResourceOperationErrorResponse>;
    /**
     * The lab user list management profile.
     */
    public readonly rosterProfile!: pulumi.Output<types.outputs.RosterProfileResponse | undefined>;
    /**
     * The lab security profile.
     */
    public readonly securityProfile!: pulumi.Output<types.outputs.SecurityProfileResponse>;
    /**
     * The lab state.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the lab.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The title of the lab.
     */
    public readonly title!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The profile used for creating lab virtual machines.
     */
    public readonly virtualMachineProfile!: pulumi.Output<types.outputs.VirtualMachineProfileResponse>;

    /**
     * Create a Lab resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LabArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.autoShutdownProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'autoShutdownProfile'");
            }
            if ((!args || args.connectionProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectionProfile'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.securityProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'securityProfile'");
            }
            if ((!args || args.virtualMachineProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualMachineProfile'");
            }
            resourceInputs["autoShutdownProfile"] = args ? (args.autoShutdownProfile ? pulumi.output(args.autoShutdownProfile).apply(types.inputs.autoShutdownProfileArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["connectionProfile"] = args ? (args.connectionProfile ? pulumi.output(args.connectionProfile).apply(types.inputs.connectionProfileArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["labName"] = args ? args.labName : undefined;
            resourceInputs["labPlanId"] = args ? args.labPlanId : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkProfile"] = args ? args.networkProfile : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["rosterProfile"] = args ? args.rosterProfile : undefined;
            resourceInputs["securityProfile"] = args ? args.securityProfile : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["virtualMachineProfile"] = args ? (args.virtualMachineProfile ? pulumi.output(args.virtualMachineProfile).apply(types.inputs.virtualMachineProfileArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceOperationError"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["autoShutdownProfile"] = undefined /*out*/;
            resourceInputs["connectionProfile"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["labPlanId"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkProfile"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceOperationError"] = undefined /*out*/;
            resourceInputs["rosterProfile"] = undefined /*out*/;
            resourceInputs["securityProfile"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["title"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualMachineProfile"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:labservices:Lab" }, { type: "azure-native:labservices/v20211001preview:Lab" }, { type: "azure-native:labservices/v20211115preview:Lab" }, { type: "azure-native:labservices/v20220801:Lab" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Lab.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Lab resource.
 */
export interface LabArgs {
    /**
     * The resource auto shutdown configuration for the lab. This controls whether actions are taken on resources that are sitting idle.
     */
    autoShutdownProfile: pulumi.Input<types.inputs.AutoShutdownProfileArgs>;
    /**
     * The connection profile for the lab. This controls settings such as web access to lab resources or whether RDP or SSH ports are open.
     */
    connectionProfile: pulumi.Input<types.inputs.ConnectionProfileArgs>;
    /**
     * The description of the lab.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
     */
    labName?: pulumi.Input<string>;
    /**
     * The ID of the lab plan. Used during resource creation to provide defaults and acts as a permission container when creating a lab via labs.azure.com. Setting a labPlanId on an existing lab provides organization..
     */
    labPlanId?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The network profile for the lab, typically applied via a lab plan. This profile cannot be modified once a lab has been created.
     */
    networkProfile?: pulumi.Input<types.inputs.LabNetworkProfileArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The lab user list management profile.
     */
    rosterProfile?: pulumi.Input<types.inputs.RosterProfileArgs>;
    /**
     * The lab security profile.
     */
    securityProfile: pulumi.Input<types.inputs.SecurityProfileArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The title of the lab.
     */
    title?: pulumi.Input<string>;
    /**
     * The profile used for creating lab virtual machines.
     */
    virtualMachineProfile: pulumi.Input<types.inputs.VirtualMachineProfileArgs>;
}