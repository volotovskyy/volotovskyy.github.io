// vendor
import React, { Component } from "react";
import { Link } from "react-router-dom";

// proj
import * as ROUTES from "routes";

export class ExceptionPage extends Component {
  //   _getErrorImage = statusCode => {
  //     switch (statusCode) {
  //       case "400":
  //         return images.exception400;

  //       case "403":
  //         return images.exception400;

  //       case "404":
  //         return images.exception404;

  //       case "500":
  //         return images.exception500;

  //       default:
  //         return images.exception404;
  //     }
  //   };

  _getErrorText = statusCode => {
    switch (statusCode) {
      case "400":
        return "Bad Request";

      case "403":
        return "Forbidden ";

      case "404":
        return "Not Found";

      case "500":
        return "Internal Server Error";

      default:
        return "Error!";
    }
  };

  render() {
    const statusCode = this.props.match.params.statusCode;

    return (
      <div>
        <div>
          {/* <img src={this._getErrorImage(statusCode)} alt="error" /> */}
        </div>
        <div>
          <h1>{statusCode}</h1>
          <span>{this._getErrorText(statusCode)}</span>
          <Link to={ROUTES.POSTS_FEED}>Back to posts feed</Link>
        </div>
      </div>
    );
  }
}

// const ExceptionWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
// `;

// const ExceptionStatusCode = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
