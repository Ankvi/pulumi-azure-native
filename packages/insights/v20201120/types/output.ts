import * as pulumi from "@pulumi/pulumi";
    /**
     * Gallery information for a workbook template.
     */
    export interface WorkbookTemplateGalleryResponse {
        /**
         * Category for the gallery.
         */
        category?: string;
        /**
         * Name of the workbook template in the gallery.
         */
        name?: string;
        /**
         * Order of the template within the gallery.
         */
        order?: number;
        /**
         * Azure resource type supported by the gallery.
         */
        resourceType?: string;
        /**
         * Type of workbook supported by the workbook template.
         */
        type?: string;
    }

    /**
     * Localized template data and gallery information.
     */
    export interface WorkbookTemplateLocalizedGalleryResponse {
        /**
         * Workbook galleries supported by the template.
         */
        galleries?: WorkbookTemplateGalleryResponse[];
        /**
         * Valid JSON object containing workbook template payload.
         */
        templateData?: any;
    }
