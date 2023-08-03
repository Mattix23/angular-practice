import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageViewComponent } from './image-view.component';
import { MaterialModule } from '../material/material.module';

describe('ImageViewComponent', () => {
  let component: ImageViewComponent;
  let fixture: ComponentFixture<ImageViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ImageViewComponent]
    });
    fixture = TestBed.createComponent(ImageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly display the image src and alt', ()=> {
    // set the src and alt of the image
    const imgSRC = "https://apod.nasa.gov/apod/image/1706/Spirograph_Hubble_960.jpg";
    const imgAlt = "The Spirograph Nebula";
    component.imageSrc = imgSRC;
    component.imageAlt = imgAlt;
    // trigger component change detection
    fixture.detectChanges();
    const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.src).toBe(imgSRC);
    expect(imgElement.alt).toBe(imgAlt);

  });
  
  it('should correctly display the image description', ()=> {
    // set the description of the image
    const imgDescription = "What is creating the strange texture of IC 418?  Dubbed the Spirograph Nebula for its resemblance to drawings from a cyclical drawing tool, planetary nebula IC 418 shows patterns that are not well understood. Perhaps they are related to chaotic winds from the variable central star, which changes brightness unpredictably in just a few hours.  By contrast, evidence indicates that only a few million years ago, IC 418 was probably a well-understood star similar to our Sun.  Only a few thousand years ago, IC 418 was probably a common red giant star.  Since running out of nuclear fuel, though, the outer envelope has begun expanding outward leaving a hot remnant core destined to become a white-dwarf star, visible in the image center. The light from the central core excites surrounding atoms in the nebula causing them to glow. IC 418 lies about 2000 light-years away and spans 0.3 light-years across.  This false-color image taken from the Hubble Space Telescope reveals the unusual details.";
    component.imageDesc = imgDescription;
    // trigger component change detection
    fixture.detectChanges();
    const paragraphElement: HTMLParagraphElement = fixture.nativeElement.querySelector('p');
    expect(paragraphElement.textContent).toBe(imgDescription);
  });
  
  //it('should update image when new date is selected ', () => {
  
  //});
});
