/**
 * Telemetry and Google Analytics Event Dispatcher
 */
export const trackEvent = (action: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, params);
  }
};

export const trackOutboundClick = (toolName: string, url: string, category = 'engineering_tool') => {
  trackEvent('outbound_tool_click', {
    tool_name: toolName,
    destination_url: url,
    tool_category: category,
    transport_type: 'beacon'
  });
};

export const trackDownload = (fileName: string, fileType = 'pdf') => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
    transport_type: 'beacon'
  });
};
