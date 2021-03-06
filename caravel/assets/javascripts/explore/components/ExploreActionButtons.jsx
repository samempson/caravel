import React, { PropTypes } from 'react';
import cx from 'classnames';
import URLShortLinkButton from './URLShortLinkButton';
import EmbedCodeButton from './EmbedCodeButton';
import DisplayQueryButton from './DisplayQueryButton';

const propTypes = {
  canDownload: PropTypes.string.isRequired,
  slice: PropTypes.object.isRequired,
};

export default function ExploreActionButtons({ canDownload, slice }) {
  const exportToCSVClasses = cx('btn btn-default btn-sm', {
    'disabled disabledButton': !canDownload,
  });

  return (
    <div className="btn-group results" role="group">
      <URLShortLinkButton slice={slice} />

      <EmbedCodeButton slice={slice} />

      <a
        href={slice.data.json_endpoint}
        className="btn btn-default btn-sm"
        title="Export to .json"
        target="_blank"
      >
        <i className="fa fa-file-code-o"></i> .json
      </a>

      <a
        href={slice.data.csv_endpoint}
        className={exportToCSVClasses}
        title="Export to .csv format"
        target="_blank"
      >
        <i className="fa fa-file-text-o"></i> .csv
      </a>

      <DisplayQueryButton slice={slice} />
    </div>
  );
}

ExploreActionButtons.propTypes = propTypes;
