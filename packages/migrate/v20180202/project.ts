import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Azure Migrate Project.
 */
export class Project extends pulumi.CustomResource {
    /**
     * Get an existing Project resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Project {
        return new Project(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:migrate/v20180202:Project';

    /**
     * Returns true if the given object is an instance of Project.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Project {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Project.__pulumiType;
    }

    /**
     * Time when this project was created. Date-Time represented in ISO-8601 format.
     */
    public /*out*/ readonly createdTimestamp!: pulumi.Output<string>;
    /**
     * ARM ID of the Service Map workspace created by user.
     */
    public readonly customerWorkspaceId!: pulumi.Output<string | undefined>;
    /**
     * Location of the Service Map workspace created by user.
     */
    public readonly customerWorkspaceLocation!: pulumi.Output<string | undefined>;
    /**
     * Reports whether project is under discovery.
     */
    public /*out*/ readonly discoveryStatus!: pulumi.Output<string>;
    /**
     * For optimistic concurrency control.
     */
    public readonly eTag!: pulumi.Output<string | undefined>;
    /**
     * Time when last assessment was created. Date-Time represented in ISO-8601 format. This value will be null until assessment is created.
     */
    public /*out*/ readonly lastAssessmentTimestamp!: pulumi.Output<string>;
    /**
     * Session id of the last discovery.
     */
    public /*out*/ readonly lastDiscoverySessionId!: pulumi.Output<string>;
    /**
     * Time when this project was created. Date-Time represented in ISO-8601 format. This value will be null until discovery is complete.
     */
    public /*out*/ readonly lastDiscoveryTimestamp!: pulumi.Output<string>;
    /**
     * Azure location in which project is created.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Name of the project.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Number of assessments created in the project.
     */
    public /*out*/ readonly numberOfAssessments!: pulumi.Output<number>;
    /**
     * Number of groups created in the project.
     */
    public /*out*/ readonly numberOfGroups!: pulumi.Output<number>;
    /**
     * Number of machines in the project.
     */
    public /*out*/ readonly numberOfMachines!: pulumi.Output<number>;
    /**
     * Provisioning state of the project.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Tags provided by Azure Tagging service.
     */
    public readonly tags!: pulumi.Output<any | undefined>;
    /**
     * Type of the object = [Microsoft.Migrate/projects].
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Time when this project was last updated. Date-Time represented in ISO-8601 format.
     */
    public /*out*/ readonly updatedTimestamp!: pulumi.Output<string>;

    /**
     * Create a Project resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProjectArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["customerWorkspaceId"] = args ? args.customerWorkspaceId : undefined;
            resourceInputs["customerWorkspaceLocation"] = args ? args.customerWorkspaceLocation : undefined;
            resourceInputs["eTag"] = args ? args.eTag : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["createdTimestamp"] = undefined /*out*/;
            resourceInputs["discoveryStatus"] = undefined /*out*/;
            resourceInputs["lastAssessmentTimestamp"] = undefined /*out*/;
            resourceInputs["lastDiscoverySessionId"] = undefined /*out*/;
            resourceInputs["lastDiscoveryTimestamp"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["numberOfAssessments"] = undefined /*out*/;
            resourceInputs["numberOfGroups"] = undefined /*out*/;
            resourceInputs["numberOfMachines"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedTimestamp"] = undefined /*out*/;
        } else {
            resourceInputs["createdTimestamp"] = undefined /*out*/;
            resourceInputs["customerWorkspaceId"] = undefined /*out*/;
            resourceInputs["customerWorkspaceLocation"] = undefined /*out*/;
            resourceInputs["discoveryStatus"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["lastAssessmentTimestamp"] = undefined /*out*/;
            resourceInputs["lastDiscoverySessionId"] = undefined /*out*/;
            resourceInputs["lastDiscoveryTimestamp"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["numberOfAssessments"] = undefined /*out*/;
            resourceInputs["numberOfGroups"] = undefined /*out*/;
            resourceInputs["numberOfMachines"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedTimestamp"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:migrate/v20171111preview:Project" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Project.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Project resource.
 */
export interface ProjectArgs {
    /**
     * ARM ID of the Service Map workspace created by user.
     */
    customerWorkspaceId?: pulumi.Input<string>;
    /**
     * Location of the Service Map workspace created by user.
     */
    customerWorkspaceLocation?: pulumi.Input<string>;
    /**
     * For optimistic concurrency control.
     */
    eTag?: pulumi.Input<string>;
    /**
     * Azure location in which project is created.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the Azure Migrate project.
     */
    projectName?: pulumi.Input<string>;
    /**
     * Provisioning state of the project.
     */
    provisioningState?: pulumi.Input<string | types.enums.v20180202.ProvisioningState>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Tags provided by Azure Tagging service.
     */
    tags?: any;
}
