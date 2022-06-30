"use strict";
/**
 * Search an attribute value in Element
 * @param element
 * @param attribute
 * @return string|undefined
 */
function searchAttribute(element, attribute) {
    if (!element.hasAttribute(attribute)) {
        console.log("Attribute " + attribute + " not found in " + element.nodeName);
        return null;
    }
    return element.getAttribute(attribute);
}
/**
 * Modal window manager
 */
class Modal {
    constructor(document) {
        this.document = document;
        let buttons = document.querySelectorAll("button.modal, input[type=\"button\"].modal");
        for (let i = 0; i < buttons.length; i++) {
            let value = searchAttribute(buttons.item(i), "data-toggle");
            if (value !== null) {
                let element = document.querySelector(value);
                /**
                 * Manage click button to open a modal window
                 */
                buttons.item(i).addEventListener("click", function (event) {
                    if (element !== null) {
                        // @ts-ignore
                        element.style.display = "block";
                    }
                });
                /**
                 * Manage click outside a modal window for close
                 */
                document.addEventListener("click", function (event) {
                    if (event.target === element) {
                        // @ts-ignore
                        event.target.style.display = "None";
                    }
                });
                /**
                 * Manage click in modal window close button for close
                 */
                // @ts-ignore
                element.
                    querySelector("button.close[data-toggle=\"close\"]").
                    addEventListener("click", function (event) {
                    // @ts-ignore
                    element.style.display = "None";
                });
            }
        }
    }
}
/**
 * Class for manage the Alert CSS component
 */
class Alert {
    /**
     * Constructor
     * @param {HTMLCollectionOf<Element>} elements
     */
    constructor(elements) {
        Array.from(elements).forEach(element => {
            element.addEventListener('click', e => {
                e.preventDefault();
                if (element.parentNode !== null && element.parentNode.parentNode !== null) {
                    element.parentNode.parentNode.removeChild(element.parentNode);
                }
            });
        });
    }
}
/**
 * Progressbar class for manage the progressbar component.
 * @param {HTMLCollectionOf<Element>} pbarNodes - The progressbar nodes.
 */
class Progressbar {
    constructor(pbarNodes) {
        this.result = "";
        this.value = "";
        this.max = "";
        this.percent = "";
        for (let i = 0; i < pbarNodes.length; i++) {
            let pbarNode = pbarNodes[i];
            // @ts-ignore
            this.value = pbarNode.attributes.getNamedItem("aria-value").value;
            if (pbarNode.attributes.getNamedItem("aria-max") != null) {
                if (!this.value.endsWith("%")) {
                    // @ts-ignore
                    this.max = pbarNode.attributes.getNamedItem("aria-max").value;
                    this.percent = ((Number(this.value.slice(0, -1)) / Number(this.max.slice(0, -1))) * 100).toFixed(0).toString() + "%";
                    this.result = this.value;
                }
                else {
                    this.result = this.value;
                    this.percent = this.value;
                }
            }
            pbarNode.appendChild(document.createElement("div")).classList.add("indicator");
            // @ts-ignore
            pbarNode.childNodes[pbarNode.childNodes.length - 1].innerText = this.result;
            // @ts-ignore
            pbarNode.childNodes[pbarNode.childNodes.length - 1].style.width = this.percent;
        }
    }
}
// @ts-ignore
new Modal(document);
// @ts-ignore
new Alert(document.getElementsByClassName("alert-close"));
// @ts-ignore
new Progressbar(document.getElementsByClassName("progressbar"));
