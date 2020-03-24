import React from 'react'

class PageButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1
    }
  }

  handleNextClick = (e) => {
    e.preventDefault();
    this.props.nextIndex();
    this.setState({
      pageNumber: this.state.pageNumber + 1
    })
  }

  handlePreviousClick = (e) => {
    e.preventDefault();
    this.props.previousIndex();
    this.setState({
      pageNumber: this.state.pageNumber - 1
    })
  }

  render() {

    console.log('current page number', this.state.pageNumber)
    console.log('totalpages', this.props.totalPages)
    let nextButtonDisable = false;
    if (this.state.pageNumber >= this.props.totalPages) {
      nextButtonDisable = true;
    }
    let previousButtonDisable = false;
    if (this.state.pageNumber <= 1) {
      previousButtonDisable = true;
    }
    return (
      <div>
        <button className='button-circle' onClick={this.handleNextClick} disabled={nextButtonDisable}>
          {'>>'}
        </button>
        <button className='button-circle' onClick={this.handlePreviousClick} disabled={previousButtonDisable}>
          {'<<'}
        </button>
      </div>
    )
  }
}

export default PageButtons;