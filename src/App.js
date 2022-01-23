import { Component } from "react";
import { apiService } from "./components/service/apiService";
import { ToastContainer } from "react-toastify";
import { NOT_ALERTS, myAlert } from "./components/service/alerts";
import ScrollToTop from "react-scroll-to-top";
import { ImCircleUp } from "react-icons/im";
import Section from "./components/section";
import SearchBar from "./components/searchBar/SearchBar";
import ImageGallery from "./components/imageGallery";
import Modal from "./components/modal";
import LoadMoreButton from "./components/button";
import Loader from "./components/loader";

class App extends Component {
  state = {
    showLoader: true,
    searchQuery: "",
    images: [],
    showModal: false,
    loadMore: false,
    setImage: null,
    page: 1,
    per_page: 12,
  };
  totalHits = null;
  itemToScroll = null;
  componentDidUpdate(prevProps, PrevState) {
    const prevQuery = PrevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.setState({ images: [], page: 1, showLoadMore: false });
    }
    if (
      (prevQuery !== nextQuery && nextQuery) ||
      PrevState.page !== this.state.page
    ) {
      this.totalHits = null;
      this.fetchImages();
      return;
    }
    if (PrevState.images !== this.state.images && this.state.page > 1) {
      this.scrollToElement();
    }
  }
  async fetchImages() {
    this.toggleLoader();
    try {
      const results = await apiService(
        this.state.searchQuery,
        this.state.page,
        this.state.per_page
      );
      if (!results.hits.length) {
        myAlert(NOT_ALERTS.NOT_FOUND);
        this.setState({ images: [], searchQuery: "" });
        return;
      }
      this.totalHits = results.total;
      this.itemToScroll = results.hits[0].id;
      this.setState({
        images:
          this.state.page === 1
            ? results.hits
            : [...this.state.images, ...results.hits],
      });
    } catch (error) {
      myAlert(NOT_ALERTS.FETCH_ERROR);
    } finally {
      this.toggleLoader();
      this.toggleLoadMore();
    }
  }
  toggleLoader = () => {
    this.setState(({ showLoader }) => ({ showLoader: !showLoader }));
  };
  toggleLoadMore = () => {
    if (!this.totalHits) {
      this.setState({ loadMore: false });
    }
    if (this.totalHits > this.state.per_page) {
      this.setState({ loadMore: true });
    }
    if (this.totalHits <= this.state.images.length) {
      this.setState({ loadMore: false });
      myAlert(NOT_ALERTS.END);
    }
  };
  scrollToElement = () => {
    const yOffset = -80;
    const element = document.getElementById(this.itemToScroll);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  handleFormSubmit = (query) => {
    this.setState({ searchQuery: query });
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  getImage = (image) => {
    this.setState({ setImage: image });
    this.toggleModal();
  };
  onLoadMoreClick = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };
  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.handleFormSubmit} />
        <Section>
          <div>
            {this.state.images.length > 0 && (
              <ImageGallery
                collection={this.state.images}
                onClick={this.getImage}
              />
            )}
            {this.state.showLoader ? (
              <Loader />
            ) : (
              this.state.loadMore && (
                <LoadMoreButton
                  text={"Load more images"}
                  onClick={this.onLoadMoreClick}
                />
              )
            )}
            <ScrollToTop
              smooth
              top={300}
              component={<ImCircleUp size="3em" color="#cccccc" />}
              style={{
                backgroundColor: "transparent",
                boxShadow: "none",
                zIndex: 0,
              }}
            />
            <ToastContainer autoClose={3000} />
          </div>
          <div>
            {this.state.showModal && (
              <Modal
                onClose={this.toggleModal}
                currentImage={this.state.setImage}
                collection={this.state.images}
              />
            )}
          </div>
        </Section>
      </div>
    );
  }
}

export default App;
