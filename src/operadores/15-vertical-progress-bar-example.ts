import { Observer, fromEvent } from 'rxjs';
import { tap, map, pluck } from 'rxjs/operators';

//Barra de recorrido vertical usando el evento

const body = document.querySelector('body');

const texto = document.createElement('div');
texto.innerHTML = `
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui dui, egestas id varius non, vestibulum at nulla. Duis molestie, velit nec porttitor eleifend, tortor dui fermentum ipsum, ac elementum ex est vitae leo. Pellentesque magna ante, interdum imperdiet lectus eget, mattis volutpat elit. Nunc viverra sodales ligula, a dictum dolor hendrerit in. Mauris lorem dui, lobortis et dui tincidunt, egestas faucibus enim. Vestibulum nulla dolor, pharetra id mi nec, elementum malesuada magna. Integer vel sem placerat, auctor risus sed, dignissim sem. Sed venenatis tellus dapibus dictum molestie. Aenean vehicula vestibulum fermentum. Suspendisse fringilla, mi eget volutpat efficitur, ante ipsum tempor neque, vel consequat dui neque vel dolor. Sed egestas consectetur turpis non dapibus. Sed fermentum sagittis leo in dignissim.
</p>
<p>
Etiam at dolor at nulla viverra lobortis vel vel velit. Suspendisse sagittis nisi ut ligula porttitor, vitae tempor lacus dictum. Pellentesque ut erat gravida, rutrum ipsum eget, lobortis risus. Duis viverra nisl id velit volutpat, scelerisque consequat diam varius. Praesent ex mi, luctus lacinia tempor at, mollis a orci. Aenean aliquam blandit massa, sed aliquam lacus iaculis vel. Donec aliquet in urna eget interdum. Donec maximus erat vel nunc tincidunt blandit. Proin eleifend suscipit sollicitudin. Donec vel varius est.
</p>
<p>
Duis convallis mollis hendrerit. Suspendisse tincidunt facilisis molestie. Pellentesque in velit nec ex dapibus viverra. Duis condimentum tortor sed mauris finibus, vitae aliquam nisl feugiat. Sed nec leo aliquet, consequat nibh sed, rutrum turpis. Vivamus viverra scelerisque elit et hendrerit. Sed ornare arcu sed diam fringilla, eu sodales purus ornare. Aenean sodales at diam in tristique. Nullam lacinia ornare dui a lacinia. Vestibulum vitae purus ac mauris convallis pharetra et vitae est. Sed interdum quam sed nulla dignissim rutrum. Morbi libero neque, faucibus eget dolor eget, placerat consequat massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
</p>
<p>
Praesent euismod vitae ipsum quis pellentesque. Phasellus congue egestas scelerisque. Phasellus sit amet ligula luctus eros cursus dictum et blandit enim. Aenean vestibulum lobortis mauris, ultrices aliquet velit scelerisque id. Nullam egestas magna quis velit sollicitudin tincidunt nec eget turpis. Nam id felis in augue condimentum mollis. Nam accumsan ornare lectus, eget pharetra ante pharetra ac. Duis egestas mauris commodo orci elementum, condimentum aliquet purus semper. Donec commodo orci non diam pretium, sed varius nisi eleifend.
</p>
<p>
Mauris pulvinar sapien a posuere egestas. Vestibulum ac sem congue, tempor orci id, malesuada metus. Vivamus pellentesque orci eu pellentesque tincidunt. Pellentesque lacus dui, interdum ac molestie a, scelerisque nec ex. Nunc aliquet, ligula eget euismod finibus, ipsum massa scelerisque quam, vel gravida felis felis id ante. In lectus leo, laoreet id odio vitae, pellentesque pulvinar ante. Sed sed tortor odio. In nec tempus lectus, ut laoreet libero. Cras ac tortor non leo condimentum scelerisque. Duis nec enim sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec at nisl in ex posuere laoreet. Nulla dignissim consequat sem, pharetra tincidunt est placerat eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In varius elementum dictum. Proin nec sapien ut quam sagittis facilisis ac nec diam.
</p>
<p>
Phasellus id nibh rutrum, maximus felis sit amet, mollis sapien. Donec eros sapien, iaculis ac cursus tempor, efficitur nec mauris. Proin ornare, sapien ac commodo venenatis, ante diam volutpat ipsum, ut maximus nibh libero congue lectus. Sed interdum facilisis ultrices. Proin sed varius felis, ac ornare leo. Etiam dapibus, turpis sed porta finibus, orci nisi sodales nibh, nec pulvinar elit purus ac ligula. Integer molestie et eros ac tincidunt.
</p>
<p>
Donec laoreet dolor vitae metus scelerisque, convallis condimentum diam fringilla. Nam eget ex non risus imperdiet congue. Nulla pulvinar, odio eu fermentum aliquam, massa lectus scelerisque elit, a vestibulum turpis metus sit amet nisi. Donec nunc mauris, eleifend ut urna sed, suscipit tincidunt lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin pulvinar risus vitae ipsum varius, vel gravida eros elementum. Suspendisse purus lectus, egestas vitae porta ac, blandit at odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer feugiat leo quis ipsum varius, non pulvinar tellus laoreet. Suspendisse pellentesque nunc id risus hendrerit semper. Quisque libero sapien, feugiat eu justo eu, vestibulum eleifend est. Cras vehicula augue eu felis ornare, in pharetra ipsum pulvinar. Quisque et euismod arcu.
</p>
<p>
Aenean accumsan purus eu vulputate gravida. Sed mollis maximus elit a tristique. Aliquam erat volutpat. Proin quam ligula, porta nec lacus sed, pretium malesuada metus. Vivamus neque magna, maximus vel lectus sit amet, pulvinar eleifend ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut lobortis orci vitae nibh sollicitudin, eu auctor mauris porttitor.
</p>
<p>
Nullam sed fringilla leo. Praesent volutpat nibh vitae consequat blandit. Fusce quis pharetra tortor. Suspendisse mattis pulvinar nunc, et cursus velit fermentum sed. Suspendisse consectetur, augue quis dictum iaculis, nisl ipsum posuere lacus, in consectetur sem nisl ultricies neque. Nunc a commodo est, sed euismod libero. Aliquam fermentum erat eget urna tempor sollicitudin at quis neque. In hac habitasse platea dictumst. Nullam sodales semper auctor. Ut sagittis enim ex, tincidunt facilisis turpis suscipit a. Curabitur sed nulla ac massa dignissim consectetur. Sed eu nibh sagittis, gravida erat non, iaculis lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
</p>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui dui, egestas id varius non, vestibulum at nulla. Duis molestie, velit nec porttitor eleifend, tortor dui fermentum ipsum, ac elementum ex est vitae leo. Pellentesque magna ante, interdum imperdiet lectus eget, mattis volutpat elit. Nunc viverra sodales ligula, a dictum dolor hendrerit in. Mauris lorem dui, lobortis et dui tincidunt, egestas faucibus enim. Vestibulum nulla dolor, pharetra id mi nec, elementum malesuada magna. Integer vel sem placerat, auctor risus sed, dignissim sem. Sed venenatis tellus dapibus dictum molestie. Aenean vehicula vestibulum fermentum. Suspendisse fringilla, mi eget volutpat efficitur, ante ipsum tempor neque, vel consequat dui neque vel dolor. Sed egestas consectetur turpis non dapibus. Sed fermentum sagittis leo in dignissim.
</p>
<p>
Etiam at dolor at nulla viverra lobortis vel vel velit. Suspendisse sagittis nisi ut ligula porttitor, vitae tempor lacus dictum. Pellentesque ut erat gravida, rutrum ipsum eget, lobortis risus. Duis viverra nisl id velit volutpat, scelerisque consequat diam varius. Praesent ex mi, luctus lacinia tempor at, mollis a orci. Aenean aliquam blandit massa, sed aliquam lacus iaculis vel. Donec aliquet in urna eget interdum. Donec maximus erat vel nunc tincidunt blandit. Proin eleifend suscipit sollicitudin. Donec vel varius est.
</p>
<p>
Duis convallis mollis hendrerit. Suspendisse tincidunt facilisis molestie. Pellentesque in velit nec ex dapibus viverra. Duis condimentum tortor sed mauris finibus, vitae aliquam nisl feugiat. Sed nec leo aliquet, consequat nibh sed, rutrum turpis. Vivamus viverra scelerisque elit et hendrerit. Sed ornare arcu sed diam fringilla, eu sodales purus ornare. Aenean sodales at diam in tristique. Nullam lacinia ornare dui a lacinia. Vestibulum vitae purus ac mauris convallis pharetra et vitae est. Sed interdum quam sed nulla dignissim rutrum. Morbi libero neque, faucibus eget dolor eget, placerat consequat massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
</p>
<p>
Praesent euismod vitae ipsum quis pellentesque. Phasellus congue egestas scelerisque. Phasellus sit amet ligula luctus eros cursus dictum et blandit enim. Aenean vestibulum lobortis mauris, ultrices aliquet velit scelerisque id. Nullam egestas magna quis velit sollicitudin tincidunt nec eget turpis. Nam id felis in augue condimentum mollis. Nam accumsan ornare lectus, eget pharetra ante pharetra ac. Duis egestas mauris commodo orci elementum, condimentum aliquet purus semper. Donec commodo orci non diam pretium, sed varius nisi eleifend.
</p>
<p>
Mauris pulvinar sapien a posuere egestas. Vestibulum ac sem congue, tempor orci id, malesuada metus. Vivamus pellentesque orci eu pellentesque tincidunt. Pellentesque lacus dui, interdum ac molestie a, scelerisque nec ex. Nunc aliquet, ligula eget euismod finibus, ipsum massa scelerisque quam, vel gravida felis felis id ante. In lectus leo, laoreet id odio vitae, pellentesque pulvinar ante. Sed sed tortor odio. In nec tempus lectus, ut laoreet libero. Cras ac tortor non leo condimentum scelerisque. Duis nec enim sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec at nisl in ex posuere laoreet. Nulla dignissim consequat sem, pharetra tincidunt est placerat eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In varius elementum dictum. Proin nec sapien ut quam sagittis facilisis ac nec diam.
</p>
<p>
Phasellus id nibh rutrum, maximus felis sit amet, mollis sapien. Donec eros sapien, iaculis ac cursus tempor, efficitur nec mauris. Proin ornare, sapien ac commodo venenatis, ante diam volutpat ipsum, ut maximus nibh libero congue lectus. Sed interdum facilisis ultrices. Proin sed varius felis, ac ornare leo. Etiam dapibus, turpis sed porta finibus, orci nisi sodales nibh, nec pulvinar elit purus ac ligula. Integer molestie et eros ac tincidunt.
</p>
<p>
Donec laoreet dolor vitae metus scelerisque, convallis condimentum diam fringilla. Nam eget ex non risus imperdiet congue. Nulla pulvinar, odio eu fermentum aliquam, massa lectus scelerisque elit, a vestibulum turpis metus sit amet nisi. Donec nunc mauris, eleifend ut urna sed, suscipit tincidunt lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin pulvinar risus vitae ipsum varius, vel gravida eros elementum. Suspendisse purus lectus, egestas vitae porta ac, blandit at odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer feugiat leo quis ipsum varius, non pulvinar tellus laoreet. Suspendisse pellentesque nunc id risus hendrerit semper. Quisque libero sapien, feugiat eu justo eu, vestibulum eleifend est. Cras vehicula augue eu felis ornare, in pharetra ipsum pulvinar. Quisque et euismod arcu.
</p>
<p>
Aenean accumsan purus eu vulputate gravida. Sed mollis maximus elit a tristique. Aliquam erat volutpat. Proin quam ligula, porta nec lacus sed, pretium malesuada metus. Vivamus neque magna, maximus vel lectus sit amet, pulvinar eleifend ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut lobortis orci vitae nibh sollicitudin, eu auctor mauris porttitor.
</p>
<p>
Nullam sed fringilla leo. Praesent volutpat nibh vitae consequat blandit. Fusce quis pharetra tortor. Suspendisse mattis pulvinar nunc, et cursus velit fermentum sed. Suspendisse consectetur, augue quis dictum iaculis, nisl ipsum posuere lacus, in consectetur sem nisl ultricies neque. Nunc a commodo est, sed euismod libero. Aliquam fermentum erat eget urna tempor sollicitudin at quis neque. In hac habitasse platea dictumst. Nullam sodales semper auctor. Ut sagittis enim ex, tincidunt facilisis turpis suscipit a. Curabitur sed nulla ac massa dignissim consectetur. Sed eu nibh sagittis, gravida erat non, iaculis lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
</p>`

body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

const scroll$ = fromEvent<Event>( document, 'scroll').pipe(
    map<Event, number>( (event:any) => {
        //Destructuamos el objeto evento ya que únicamente queremos algunas propiedades.
        const { scrollTop, scrollHeight, clientHeight} = event.target['documentElement'];
        return scrollTop / (scrollHeight - clientHeight) * 100;
    })
)

scroll$.subscribe( percentageScroll => {
    console.log()
    progressBar.style.height = `${percentageScroll.toString()}%`;
});


