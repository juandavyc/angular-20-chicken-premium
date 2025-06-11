import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AppAssets } from '@core/configs';
import { Seo } from '@core/interfaces/seo.interface';


@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private title = inject(Title);
  private meta = inject(Meta);

  constructor() { }

  public setSeoMetadata(seo: Seo) {
    this.title.setTitle(seo.title);
    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ name: 'keywords', content: seo.tags });

    this.meta.updateTag({ name: 'og:title', content: seo.title });
    this.meta.updateTag({ name: 'og:description', content: seo.description });
    this.meta.updateTag({ name: 'og:type', content: 'website' });

    if (seo.image) {
      this.meta.updateTag({ name: 'og:image', content: seo.image });
      this.meta.updateTag({ name: 'twitter:image', content: seo.image });
    }
    else {
      this.meta.updateTag({ name: 'og:image', content: AppAssets.seo });
      this.meta.updateTag({ name: 'twitter:image', content:AppAssets.seo });
    }
  }


}
