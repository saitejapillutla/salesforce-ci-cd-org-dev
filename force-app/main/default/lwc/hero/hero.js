import { LightningElement, api } from 'lwc';

const VIDEO = 'Video';
const IMAGE = 'Image';

/**
 * A Hero component that can display a Video or Image.
 */
export default class Hero extends LightningElement {
    @api title;
    @api slogan;
    @api buttonText;
    @api heroDetailsPosition;
    @api resourceUrl;
    @api imgOrVideo;
    @api internalResource;
    @api overlay;
    @api opacity;
    @api buttonClickProductOrFamilyName;

}