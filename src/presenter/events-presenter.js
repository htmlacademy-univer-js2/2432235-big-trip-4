import EventListView from '…/view/event-list-view.js';
import SortView from '…/view/sort-view.js';
import PointView from '…/view/new-point-view.js';
import PointEditView from '…/view/pint-view.js';
import EventView from '…/view/.js';
import { render } from '…/render.js';

export default class EventsPresenter {
  eventsComponent = new EventListView();

  constructor({eventsContainer}) {
    this.eventsContainer = eventsContainer;
  }

  init() {
    render(new SortView(), this.eventsContainer);
    render(this.eventsComponent, this.eventsContainer);
    render(new PointView(), this.eventsComponent.getElement());
    render(new PointEditView(), this.eventsComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventView(), this. eventsComponent.getElement());
    }
  }
}
