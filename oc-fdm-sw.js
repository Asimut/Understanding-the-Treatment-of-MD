importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js'); 

var CACHE_VERSION = 1;
var CURRENT_CACHES = {
  prefetch: 'prefetch-cache-Understanding-the-Treatment-of-MD-v' + CACHE_VERSION
};

//Page Link
var pageLink = 'https://asimut.github.io/Understanding-the-Treatment-of-MD/';

workbox.setConfig({ debug: true });

self.addEventListener('install', function(event) {
  let ok,
    libjs = ['player-0.0.11.min', 'lzwcompress'],
    libcss = ['icomoon'],
    libfonts = ['icomoon', 'Lato-Black', 'Lato-Bold', 'Lato-Italic', 'Lato-Light', 'Lato-Regular'],
    mondrianjs = ['3e40eb79', '3f9ba7c0', '07d24945', '7b2a258a', '18ae508c', 'b6873211', 'c2f6b4b8', 'cdf9a293', 'entry'],
    risejs = ['4ca831bf', '20be7de8', 'e6b609cf', 'e94e3108', 'eb9bd09f'],
    risecss = ['7c4cd354', '11732e6a'],
    wbjs = ['ae9f88e9', 'b92601c5', 'd4168b22', 'd445416d', 'entry', 'fadc459f'],
    wbcss = ['467c7226'],
    assets =[
      '1RYe8iV98O1VRp4T_uhqNDLlCrh-_5g4W.png',
      '1XKNCwg3Qm1JQaMP_sfVSSehnBwTgA10F.png',
      '2M1b5h6O9DpFg_6a_uu6Gevc-pAiDXBAJ.png',
      '2vgpuntHeJy0A8P7_XTu-l932Xr0j9VEN.png',
      '3y56OUIqSj_LJxJc_Fcz5f6WBS0FktGGv.jpg',
      '4CGzagrSWaBRki06_z-WFW_xawIIJU5x_.png',
      '6CyzimPcyiXlgfb3_xPHzLlAt7_01YoFJ.png',
      '6qaTZzYvXCIYtlMQ_AUzSH8jT4xFyfcYF.png',
      '7d4KmrndrAKflpCV_AjZG11vLMsIrIPlZ.png',
      '08_HjDlv33Ye0V9n_kfisWqW7vgAz69uV.png',
      '8hvPl2MzINSdvZ34_YwKiqoMhSyVfTLbA.png',
      '8sJSSU8ohw3lzqNV_transcoded-QDqKCPlPruDgXj5--Gloria_2Weeks-00001.png',
      '29T6pTS-LjDVENmW_bmbpctx2MWE776V8.png',
      '50KEhDiGD8kzMXgp_Kz-XrBlTBlieq7eQ.png',
      '73TYNAygwTTUBAkv_1u5jkIIq4niuBhVo.svg',
      '322E_-TyNz2uFFdr_yFX-Hsof8NCenUB_.png',
      'aIt4ZlnIqt5jmo8Z_small_1579124541.png',
      'AxI21C0PGsxmwkp0_gAXajpLNmC8W_MsA.png',
      'Bf0DYqGF9rVoo1bq_aLQ5C_jTMPwAsjUr.png',
      'c6Ov1GIaG8Ggp38T_zLzOnSkBsZjZ8HyX.png',
      'c7VMBHHtD2p0G1Gj_transcoded-rYO1lHqrO4rTMrlo-Martin_6Weeks-00001.png',
      'cPdxVegt6NoQaj_v_transcoded-rJfHogn6SIOhVT3v-Jane_Baseline-00001.png',
      'CTwsLc0vo2-xcxUb_KEzpUfBEn0Az1Ge-.png',
      'CvTWV0lymrcb06WK_-qboOGLLZM2X_cBe.png',
      'cW3KWzjAlDMQspcB_transcoded-Ej_YvFp67do0WgIJ-Sue_6Weeks-00001.png',
      'dlhTcMi3pIOOSTEy_1dSuZqKa_N5blGA8.png',
      'dTtuSx-xPu6DxuYA_transcoded-EIG8-_2SuQtTgoae-Sue_Baseline-00001.png',
      'DXAqGKqYwITZFTs2_2rmXOwzQhyhxpzZz.png',
      'Ej0SzNlev7p-ywVm_transcoded-6F-kinz-Um3SBb7u-Gloria_Baseline-00001.png',
      'ejmg1qEQAeYMz7wn_LtxkH4s7Nriha1gg.png',
      'f1Z-ZsHqE1YxCTey_transcoded--p-K0T8ihC0O0NHv-Ed_8Weeks-00001.png',
      'fxiXUN80fubeuLvy_transcoded-cuFpRjmcAvLPRgBF-Martin_Baseline-00001.png',
      'gD60cEvmrppqTD0o_jQYr_ugoreE5k2wG.png',
      'GwLzSsV3FL96B8xr_4ogyPvBNv8HGJJ_E.png',
      'gxFw68mtJhy2qgjf_bkq0fzjIGVDvEDeu.png',
      'hxT65JWPJN2wZ5-7_ap3_xMk3EmWEBRCK.png',
      'HzmFHpl5WW0mHmSM_-PiYcMSEDDEmCY6V.png',
      'icpv5ILFpizs0OT6_uh4dqE7zsUI2r1wB.png',
      'it4xcJA0dDT99kyu_iW-FTcuutRmBZ8k0.png',
      'ITqoJODS3y-BXUwg_hTwYPO6zFjnoZ-Ly.png',
      'Ixdv6-pTOxZrTNhL_OGF2nWLneKmbGIDe.png',
      'IziWbGDSSoWJ--4y_aM0TyYbchf6lQBnk.png',
      'J_9RiIELvQiybUs3_small.png',
      'j3LXln9LXp2J-O9w_Z-thXYtbeknZuWSA.png',
      'JDxGbVpg8vTMlUGr_phER7YCmgie78q9S.png',
      'jeIgshyeABvqJaw2_N0iivWmaTasjjPze.png',
      'JFj39N0asllbcEFe_transcoded-LvBEHhN3GT1Cnf8U-Gloria_6Weeks-00001.png',
      'KOc5Zd9b8pVZWEPg_zV3pEi8vZRgOY4H5.png',
      'KPxn_Su4sK15-qNs_yjZQLNQnL37VJ8Ca.png',
      'kWFwTx4ELH1RhgkE_zZq-bPMAXR15ya9M.png',
      'lEwghnmUKssrh39t_4_cities.jpg',
      'LNNlv0MfZcvuAkJX_pUKlA_ZN5HnDD-9s.svg',
      'lXBbqvE1_AmbYvAf_transcoded-6iZM7VOHmGoVJ7qg-lips-00001.png',
      'M2DthXJPTmECwvT3_qtiZg7kLQBIOL401.png',
      'mgrs_XPNUbx8qluB_kD5ZdOpiH6zgM8tz.png',
      'Net021-u2-8Z3rTA_kPzGbxk-HtcTpoDy.png',
      'nL_ok2hv8JKxVQsL__Ct1dZ08pNVbKhju.png',
      'nLPAOfxh2jEiksAW_obx9GZ_UdIh6j26S.png',
      'nmkf4PJ-lloHmTOQ_QDnxVHL3dUPxSwql.png',
      'NScEIjiOqs4nc-o0_transcoded-cyqlI9DTLppcN8Vk-torso-00001.png',
      'nt38lv7KNncHXs3W_zZqQil0yAb5ASX0e.png',
      'oGhBXEUfiUD2MsqT_transcoded-p3ZW65hnn88TuGUm-Jane_48Weeks-00001.png',
      'oJEbErfmCaruEqQz_transcoded-eZ9E531W2YCH-5Jd-upper-limbs-00001.png',
      'oqL93uWEFDL1Hz-j_6E2wLd_5pvik-AfL.png',
      'PdXRa31IWAbooE7x_IaCcsmiMK7vBWyFv.png',
      'pGRyTTc2B1mTtLnu_KtlnZvTY_6bsLgiq.png',
      'PTLYQyr44LO0dUwX_zdP5SLGTJyDaShKl.png',
      'PXZ-gPaVs1SJ0_tF_P1c5WYGq3jg-mCNZ.png',
      'q890UOiAIXdihLiu_7qJKzI6Ux2ObDydb.png',
      'qgbQXGy1ZER4AFSP_transcoded-LalaPRKzNnds7fOX-lower-limbs-00001.png',
      'QYTw_r3owjEvFfOb_Dt6P6dGRXPzDT7Q8.png',
      'qZCx15C9fBTeXVyG_quote_background.jpg',
      'R2f4h3LzoiDwLBiv_cWRCBafSzfiU-LwL.png',
      'r8nTFVP9LE1SuzaL_DRiZvNn_c8xjdmS9.png',
      'rpOg5cO3bLS4ccDm_ODWqnRaeIv_yExEz.png',
      'Rsfgec8vIrSkY7U7_sDS_9D364hA2SlJ-.svg',
      'sA256rWPbiB8eLFO_k6XT224PHdMik2KB.png',
      'SdXnjFzyy7dCbp5A_00iaS05tFptaeCbk.png',
      'sKEH26BlDdOenhQO_Wl5unxrAInzhE6Sf.png',
      'SkvptsbZAVdwT_ZX_1hYeCZtXoIfKUvED.png',
      'Sow3sxIuNo7pN50L_sHmnZuS5hTyBh71E.svg',
      'sTYgfaSmO6Ic7cSJ_NJXZU0JEvOGtgqfj.png',
      'synTJ2GL-SBhc7dW_IUnOWLA-txaNMhy8.png',
      't8IxkplIGQ-QAjYR_Q0fKDZtYxc315r7W.png',
      'uB0ajheRN-QXcUk1_RWh4D_s7JT8qvz7K.png',
      'VdYmjeyG5UdpqCKE_mR9SNknBr365Iwcq.png',
      'vIz14UlA2x3o3E03__BsaZtftMR_j3ky5.png',
      'VjuL8JchudEgaGU7_transcoded-kd_IwTb56uWFyUbl-Ed_Baseline-00001.png',
      'WdYX1CTljJeIa45Z_ezf5kjEL6CllSQp1.png',
      'Wg0l57RA0-6TIxcS_GL7uzyP2ZbvLaUiq.png',
      'wjL9A8H7FMWZFGNO_bOFmv1bLIkarPMT6.png',
      'X0-aF5unOGJ1E-3g_Uaqf9FX38KLvSlnG.png',
      'XCFP4ZJFZY5iZD2-_NF1JbcP3LeoYuD55.png',
      'XiEiJx5t8FlLYeJQ_sQeVi5FzNYgZ4FSK.png',
      'xj8lv7dQY9bk_Wsj_transcoded-WrsXiZUS_HBNp3RL-Sue_48Weeks-00001.png',
      'XrO2snvj9a-ILF-__example-header-image.jpg',
      'yEGejUJOQuhbgdRT_-RQXJlEbzdUcsKCR.png',
      'ywKcBICXW26V-4x4_uBpWcBI8uiN4K19B.png',
      'yYElwb4zInnt1f5a_transcoded-t9PVyavmR7KoJT-W-Jane_6Weeks-00001.png',
      'ZHaebe6ahCsk8Frq_PxoYZ3c1RDgki6-o.png',
      'zV7m9mBxAFpVIUBh_qSGggfnXK_LcPqTh.png',
      'zYpzBGEDYuDUI6Wu_ZV9sVhdLLPr5_C8F.svg',
      '6TjLZv/ingrezza-logo.svg',
      'DGH7Pb/INGREZZA-Full-Prescribing-Information_PI_Approved.pdf',
      'yIAiXI/INGREZZA-Full-Prescribing-Information_PI_Approved.pdf',
    ],
    assetsvideo =[
      '4N8M27FZgINOVRE0_transcoded-rYO1lHqrO4rTMrlo-Martin_6Weeks.mp4',
      '90Dfs2zsU-KqFQnq_transcoded-QDqKCPlPruDgXj5--Gloria_2Weeks.mp4',
      'CYKr3Etx8P_jVD2k_transcoded-kd_IwTb56uWFyUbl-Ed_Baseline.mp4',
      'EFFx6BsDjnZVltL8_transcoded-LvBEHhN3GT1Cnf8U-Gloria_6Weeks.mp4',
      'eyS1nm4ELHj6ZmDP_transcoded-6iZM7VOHmGoVJ7qg-lips.mp4',
      'hlCWMjbqGQw6dFqj_transcoded-p3ZW65hnn88TuGUm-Jane_48Weeks.mp4',
      'HLsYikKrimubv2_3_transcoded-rJfHogn6SIOhVT3v-Jane_Baseline.mp4',
      'iVaZPgvvkKc6eo4p_transcoded-t9PVyavmR7KoJT-W-Jane_6Weeks.mp4',
      'MHJa93QOiNHlk32Q_transcoded-EIG8-_2SuQtTgoae-Sue_Baseline.mp4',
      'OCTsDilOTiMAGjzz_transcoded-Ej_YvFp67do0WgIJ-Sue_6Weeks.mp4',
      'RlcLsyFpZA2Wx-Ck_transcoded-WrsXiZUS_HBNp3RL-Sue_48Weeks.mp4',
      'RXsuDek5J4mgkaKd_transcoded-6F-kinz-Um3SBb7u-Gloria_Baseline.mp4',
      't0jFTK5Uqxt8AtSt_transcoded-LalaPRKzNnds7fOX-lower-limbs.mp4',
      'us5HYQcyjEGXETVL_transcoded-cyqlI9DTLppcN8Vk-torso.mp4',
      'wAn1yJNZJ4Ghwg6i_transcoded-cuFpRjmcAvLPRgBF-Martin_Baseline.mp4',
      'wBOdMFp7w2okij68_transcoded--p-K0T8ihC0O0NHv-Ed_8Weeks.mp4',
      'XFSYw5dh225NWwI-_transcoded-eZ9E531W2YCH-5Jd-upper-limbs.mp4'
    ];
  var urlsToPrefetch = [
      pageLink,
      pageLink+'index.html',
      ...libjs.map(i => pageLink+'lib/' + i + '.js'),
      ...libcss.map(i => pageLink+'lib/' + i + '.css'),
      ...libfonts.map(i => pageLink+'lib/fonts/' + i + '.woff'),
      ...mondrianjs.map(i => pageLink+'lib/mondrian/' + i + '.js'),
      ...risejs.map(i => pageLink+'lib/rise/' + i + '.js'),
      ...risecss.map(i => pageLink+'lib/rise/' + i + '.css'),
      ...wbjs.map(i => pageLink+'lib/wb/' + i + '.js'),
      ...wbcss.map(i => pageLink+'lib/wb/' + i + '.css'),
      pageLink+'lib/fonts/icomoon.ttf',
      pageLink+'assets/custom/jquery-3.6.0.min.js',
      pageLink+'assets/custom/script.js',
      pageLink+'assets/custom/style.css',
      pageLink+'assets/custom/arrow_down.png',
      pageLink+'assets/custom/chat.svg',
      pageLink+'assets/custom/check.svg',
      pageLink+'assets/custom/cover_logo.png',
      pageLink+'assets/custom/down-arrow.svg',
      pageLink+'assets/custom/ingrezza-valbenazine-logo-n.svg',
      pageLink+'assets/custom/logo-modal.png',
      pageLink+'assets/custom/open-book.svg',
      ...assets.map(i => pageLink+'assets/' + i),
      ...assetsvideo.map(i => pageLink+'assets/' + i + '?v=1'),
      pageLink+'oc-fdm-sw.js',
      pageLink+'manifest.json',
      pageLink+'152.png',
      pageLink+'144.png',
      pageLink+'64.png',
      pageLink+'32.png',
      pageLink+'android-launchericon-512-512.png'
  ];

  // All of these logging statements should be visible via the "Inspect" interface
  // for the relevant SW accessed via chrome://serviceworker-internals
  console.log('Handling install event. Resources to prefetch:', urlsToPrefetch);

  // self.skipWaiting();

  event.waitUntil(
    caches.open(CURRENT_CACHES.prefetch).then(async (cache) => {
      return cache.addAll(urlsToPrefetch);      
    }).then(() => {
      console.log('All files were successfully cached.');

      caches.open(CURRENT_CACHES.prefetch).then(cache => {
        cache.keys()
        .then(requests => console.log(requests))
      })

      self.skipWaiting();
    })
  );

});

self.addEventListener('activate', function(event) {
  // Delete all caches that aren't named in CURRENT_CACHES.
  // While there is only one cache in this example, the same logic will handle the case where
  // there are multiple versioned caches.
  var expectedCacheNames = Object.keys(CURRENT_CACHES).map(function(key) {
    return CURRENT_CACHES[key];
  });

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (expectedCacheNames.indexOf(cacheName) === -1) {
            // If this cache name isn't present in the array of "expected" cache names, then delete it.
            console.log('Deleting out of date cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
        );
    })
    );    
});

self.addEventListener('fetch', function(event) {
  
  headersLog = [];
  for (var pair of event.request.headers.entries()) {
    console.log(pair[0]+ ': '+ pair[1]);
    headersLog.push(pair[0]+ ': '+ pair[1])
 }
 console.log('Handling fetch event for', event.request.url, JSON.stringify(headersLog));

  if (event.request.headers.get('range')) {
    console.log('Range request for', event.request.url);
    var rangeHeader=event.request.headers.get('range');
    var rangeMatch =rangeHeader.match(/^bytes\=(\d+)\-(\d+)?/)
    var pos =Number(rangeMatch[1]);
    var pos2=rangeMatch[2];
    if (pos2) { pos2=Number(pos2); }
    
    console.log('Range request for '+ event.request.url,'Range: '+rangeHeader, "Parsed as: "+pos+"-"+pos2);
    event.respondWith(
      caches.open(CURRENT_CACHES.prefetch)
      .then(function(cache) {
        return cache.match(event.request.url);
      }).then(function(res) {
        if (!res) {
          console.log("Not found in cache - doing fetch")
          return fetch(event.request)
          .then(res => {
            console.log("Fetch done - returning response ",res)
            return res.arrayBuffer();
          });
        }
        console.log("FOUND in cache - doing fetch")
        return res.arrayBuffer();
      }).then(function(ab) {
        console.log("Response procssing")
        let responseHeaders=  {
          status: 206,
          statusText: 'Partial Content',
          headers: [
            ['Content-Type', 'video/mp4'],
            ['Content-Range', 'bytes ' + pos + '-' + 
            (pos2||(ab.byteLength - 1)) + '/' + ab.byteLength]]
        };
        
        console.log("Response: ",JSON.stringify(responseHeaders))
        var abSliced={};
        if (pos2>0){
          abSliced=ab.slice(pos,pos2+1);
        }else{
          abSliced=ab.slice(pos);
        }
        
        console.log("Response length: ",abSliced.byteLength)
        return new Response(
          abSliced,responseHeaders
        );
      }));
  } else {
    console.log('Non-range request for', event.request.url);
    event.respondWith(
    // caches.match() will look for a cache entry in all of the caches available to the service worker.
    // It's an alternative to first opening a specific named cache and then matching on that.
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('Found response in cache:', response);
        return response;
      }
      console.log('No response found in cache. About to fetch from network...');
      // event.request will always have the proper mode set ('cors, 'no-cors', etc.) so we don't
      // have to hardcode 'no-cors' like we do when fetch()ing in the install handler.
      return fetch(event.request).then(function(response) {
        console.log('Response from network is:', response);

        return response;
      }).catch(function(error) {
        // This catch() will handle exceptions thrown from the fetch() operation.
        // Note that a HTTP error response (e.g. 404) will NOT trigger an exception.
        // It will return a normal response object that has the appropriate error code set.
        console.error('Fetching failed:', error);

        throw error;
      });
    })
    );
  }
});
