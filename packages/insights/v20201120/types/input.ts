import * as pulumi from "@pulumi/pulumi";
    /**
     * Gallery information for a workbook template.
     */
    export interface WorkbookTemplateGalleryArgs {
        /**
         * Category for the gallery.
         */
        category?: pulumi.Input<string>;
        /**
         * Name of the workbook template in the gallery.
         */
        name?: pulumi.Input<string>;
        /**
         * Order of the template within the gallery.
         */
        order?: pulumi.Input<number>;
        /**
         * Azure resource type supported by the gallery.
         */
        resourceType?: pulumi.Input<string>;
        /**
         * Type of workbook supported by the workbook template.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Localized template data and gallery information.
     */
    export interface WorkbookTemplateLocalizedGalleryArgs {
        /**
         * Workbook galleries supported by the template.
         */
        galleries?: pulumi.Input<pulumi.Input<WorkbookTemplateGalleryArgs>[]>;
        /**
         * Valid JSON object containing workbook template payload.
         */
        templateData?: any;
    }
