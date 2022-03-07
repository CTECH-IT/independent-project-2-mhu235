const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
const DETAIL_DESCRIPTION_SELECTOR = '[data-image-role="description"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails(imageUrl, titleText, descriptionText) {
    'use strict';
    let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    let detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;

    let description = document.querySelector(DETAIL_DESCRIPTION_SELECTOR);
    description.textContent = descriptionText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function descriptionFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-description');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail),
    descriptionFromThumb(thumbnail));
}

function getThumbnailsArray() {
    'use strict';
    let thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    let thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function(event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
    });
}

function initializeEvents() {
    'use strict';
    let thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();
